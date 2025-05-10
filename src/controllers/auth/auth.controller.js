import { authServices } from '../../services/index.services.js'

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const { code, message, user } = await authServices.login(email, password)
    if (user) {
      res.status(code).json({ user })
    } else {
      res.status(code).json({ message })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export default { login }
