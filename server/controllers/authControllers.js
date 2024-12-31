import {
  createUser,
  findUserByUsernameOrEmail,
} from '../../service/userService.js'
import {generateToken, comparePasswords} from '../../utils/authUtils.js'

export const createUserController = async (req, res) => {
  const {username, email, age, password} = req.body
  console.log('Received req.body:', req.body)

  if (!username || !email || !age || !password) {
    return res.status(400).json({message: 'Missing required fields.'})
  }

  try {
    const user = await createUser({username, email, age, password})
    const token = generateToken({user_id: user.id})

    res.cookie('authToken', token, {
      httpOnly: true,
      maxAge: 3600000,
    })
    return res.json({message: 'Authentication successful!'})
  } catch (error) {
    console.error(error)
    return res.status(500).json({error: 'Internal Server Error'})
  }
}

export const getUserController = async (req, res) => {
  const {username, email, password} = req.body

  try {
    const user = await findUserByUsernameOrEmail(username, email)

    if (!user) {
      return res.status(404).json({data: 'User not found'})
    }

    const isPasswordValid = comparePasswords(password, user.password)

    if (!isPasswordValid) {
      return res.status(401).json({data: 'Invalid credentials'})
    }

    const token = generateToken({user_id: user.id})
    res.cookie('authToken', token, {
      httpOnly: true,
      maxAge: 3600000,
    })
    return res.json({message: 'Authentication successful!'})
  } catch (error) {
    console.error(error)
    return res.status(500).json({error: 'Internal Server Error'})
  }
}
