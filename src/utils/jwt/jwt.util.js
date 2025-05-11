import jwt from 'jsonwebtoken'
import { envs } from '../../config/index.config.js'
const { sign, verify, decode } = jwt

const verifyToken = (token) => {
  const payload = verify(token, envs.SECRET_WORD)
  return payload
}

const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  }

  const token = sign(payload, envs.SECRET_WORD, { expiresIn: '5h' })
  return token
}

export default {
  generateToken,
  verifyToken,
}
