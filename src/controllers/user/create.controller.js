import { userServices } from '../../services/index.services.js'

const createUser = async (req, res) => {
  try {
    const data = req.body
    const { code, message, user } = await userServices.createUser(data)
    res.status(code).json(user ? { user } : { message })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { createUser }
