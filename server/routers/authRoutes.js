import express from 'express'
import {
  createUserController,
  getUserController,
} from '../controllers/authControllers.js'

const router = express.Router()

router.post('/register', createUserController)
router.post('/login', getUserController)

export {router}
