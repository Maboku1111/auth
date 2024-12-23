import {prisma} from '../database/dbConfig.js'

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
    return res.status(201).json(users)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const getUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ username: username }, {email: email}],
        password: password,
      },
    });

    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ error: 'User not found or incorrect credentials' })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
