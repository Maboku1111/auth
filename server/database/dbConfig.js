/* eslint-disable no-undef */
import {PrismaClient} from '@prisma/client'
import bcrypt from 'bcrypt'

export const prisma = new PrismaClient().$extends({
  query: {
    user: {
      $allOperations({operation, args, query}) {
        if (['create', 'update'].includes(operation) && args.data['password']) {
          args.data['password'] = bcrypt.hashSync(args.data['password'], 10)
        }
        return query(args)
      },
    },
  },
})

export async function connectToDB() {
  try {
    await prisma.$connect()
    console.log('[database]: connected!')
  } catch (err) {
    console.log('[database]: connection error: ', err)
    await prisma.$disconnect()
    process.exit(1)
  }
}
