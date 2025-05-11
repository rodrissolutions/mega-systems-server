import { Router } from 'express'
import { userControllers } from '../../controllers/index.controllers.js'
import { jwtMiddlewares } from '../../middlewares/index.middlewares.js'

const userRouter = Router()

userRouter.post('/', userControllers.createUser)
userRouter.get(
  '/all',
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  userControllers.getAll
)
userRouter.get(
  '/user/:id',
  jwtMiddlewares.validateJWT,

  userControllers.getUserById
)

export default userRouter
