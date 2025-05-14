import { Router } from 'express'
import userRouter from './user/user.route.js'
import codeRouter from './code/code.route.js'
import authRouter from './auth/auth.route.js'

const rootRouter = Router()

rootRouter.use('/auth', authRouter)
rootRouter.use('/codes', codeRouter)
rootRouter.use('/users', userRouter)
export default rootRouter
