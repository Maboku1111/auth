import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const generateToken = (payload, expiresIn = '1h') => {
  return jwt.sign(payload, import.meta.env.JWT_SECRET, {expiresIn})
}

export const comparePasswords = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword)
}
