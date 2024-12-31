import {prisma} from '../server/database/dbConfig.js'

export const createUser = async (userData) => {
  console.log("Received userData:", userData);
  return prisma.user.create({
    data: userData,
  })
}

export const findUserByUsernameOrEmail = async (username, email) => {
  return prisma.user.findFirst({
    where: {
      OR: [{username}, {email}],
    },
  })
}
