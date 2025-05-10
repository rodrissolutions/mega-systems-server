import { authServices } from '../../services/index.services.js'
import { jwtUtils } from '../../utils/index.utils.js'

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const { code, message, user } = await authServices.login(email, password)
    if (user) {
      const token = jwtUtils.generateToken(user)
      return res.status(code).json({ token, message, user })
    }
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export default { login }
