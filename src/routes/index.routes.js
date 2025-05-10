import { Router } from 'express'
import userRouter from './user/user.route.js'

const rootRouter = Router()

rootRouter.use('/users', userRouter)

export default rootRouter
