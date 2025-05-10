import { Router } from 'express'
import { userControllers } from '../../controllers/index.controllers.js'

const userRouter = Router()

userRouter.post('/', userControllers.createUser)
userRouter.get('/all', userControllers.getAll)
userRouter.get('/user/:id', userControllers.getUserById)

export default userRouter
