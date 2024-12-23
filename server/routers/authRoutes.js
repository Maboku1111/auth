import express from 'express'
import {createUser, getUser} from '../controllers/AuthControllers.js'

const router = express.Router()

router.post('/register', createUser)
router.post('/login', getUser)

export {router}
