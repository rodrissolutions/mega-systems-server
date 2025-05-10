import { userServices } from '../../services/index.services.js'
import { bcryptUtils } from '../../utils/index.utils.js'

const createUser = async (req, res) => {
  try {
    const { password, ...data } = req.body
    const hashedPassword = await bcryptUtils.hashPassword(password)
    const { code, message, user } = await userServices.createUser({
      ...data,
      password: hashedPassword,
    })
    res.status(code).json(user ? { user } : { message })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { createUser }
