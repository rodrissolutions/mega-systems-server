import { User } from '../../lib/database.js'
import { bcryptUtils } from '../../utils/index.utils.js'

const login = async (email, password) => {
  console.log(email.length)
  const user = await User.findOne({
    where: {
      email,
    },
  })
  if (!user) return { code: 401, message: 'Credenciales incorrectas' }
  if (!user.isVerified) return { code: 401, message: 'Cuenta no verificada' }
  const isValidPassword = await bcryptUtils.comparePassword(
    password,
    user.password
  )
  const { password: _, ...userWithoutPassword } = user.dataValues
  if (!isValidPassword)
    return { code: 401, message: 'Credenciales incorrectas' }

  return {
    code: 200,
    user: userWithoutPassword,
    message: `Bienvenido ${user.fullName}`,
  }
}

export default { login }
