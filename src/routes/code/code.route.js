import { Router } from 'express'
import { codeControllers } from '../../controllers/index.controllers.js'

const codeRouter = Router()

codeRouter.get('/codeBy', codeControllers.getCode)
codeRouter.put('/validateAccount', codeControllers.validateAccount)
codeRouter.put('/resendCode', codeControllers.updateCode)

export default codeRouter
