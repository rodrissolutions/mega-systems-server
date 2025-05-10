import { Router } from 'express'
import { authControllers } from '../../controllers/index.controllers.js'

const authRouter = Router()

authRouter.post('/login', authControllers.login)

export default authRouter
