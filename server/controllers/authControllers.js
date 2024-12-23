import {prisma} from '../database/dbConfig.js';
import jwt from 'jsonwebtoken';

export const createUser = async (req, res) => {
  const {username, email, age, password} = req.body
  try {
    const users = await prisma.user.create({
      data: {
        username,
        email,
        age,
        password,
      },
    })
    const id = users._id

    const jwt_data = jwt.sign({user_id: id}, 'JWT_SECRET', {expiresIn: '1h'})
    return res.status(201).json({data: jwt_data})
  } catch (error) {
    console.error(error)
    return res.status(500).json({error: 'Internal Server Error'})
  }
}

export const getUser = async (req, res) => {
  const {username, email, password} = req.body

  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{username: username}, {email: email}],
        password: password,
      },
    })

    if (user) {
      const id = user._id

      const jwt_data = jwt.sign({user_id: id}, 'JWT_SECRET', {expiresIn: '1h'})
      return res.json({data: jwt_data})
    } else {
      return res.json({data: 'try again ! email id not found'})
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({error: 'Internal Server Error'})
  }
}
