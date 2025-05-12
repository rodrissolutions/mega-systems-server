import { Router } from 'express'
import { userControllers } from '../../controllers/index.controllers.js'
import { jwtMiddlewares } from '../../middlewares/index.middlewares.js'
import { multerHelpers } from '../../helpers/index.helpers.js'

const userRouter = Router()

userRouter.post(
  '/',
  multerHelpers.upload.single('profilePicture'),
  userControllers.createUser
)
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
