import express from 'express'
import {
  createUserController,
  getUserController,
} from '../controllers/authControllers.js'

const router = express.Router()

router.post('/create', createUserController)
router.post('/login', getUserController)

export {router}
