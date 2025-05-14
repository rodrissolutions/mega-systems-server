import { Code, User } from '../../lib/database.js'

const createCode = async (data) => {
  const { type, UserId, code } = data
  const expirationTime = new Date()

  expirationTime.setMinutes(expirationTime.getMinutes() + 5)

  const codeData = await Code.create({
    type,
    UserId,
    code,
    expirationTime,
  })

  return codeData.dataValues
}

const getCode = async (email, type) => {
  const user = await User.findOne({
    where: {
      email,
    },
  })
  if (!user) return { code: 404, message: 'Usuario no encontrado' }

  const codeFound = await Code.findOne({
    where: {
      UserId: user.id,
      type,
    },
  })

  if (!codeFound) return { code: 404, message: 'Codigo no encontrado' }
  return { code: 200, codeData: codeFound.dataValues }
}

const validateAccount = async (email, type, code) => {
  const user = await User.findOne({
    where: {
      email,
    },
  })

  if (!user) return { code: 404, message: 'Usuario no encontrado' }
  const codeFound = await Code.findOne({
    where: {
      UserId: user.id,
      type,
      code,
    },
  })
  if (!codeFound) return { code: 404, message: 'Código no encontrado' }
  if (!codeFound.isValid) return { code: 400, message: 'Código no válido' }
  if (codeFound.expirationTime < new Date())
    return { code: 400, message: 'El código ha expirado' }

  const codeUpdated = await Code.update(
    {
      isValid: false,
    },
    {
      where: {
        UserId: user.id,
        code,
        type,
      },
    }
  )

  return { code: 200, message: 'Cuenta verrificada' }
}

const updateCode = async (email, type, newCode) => {
  const user = await User.findOne({
    where: {
      email,
    },
  })

  if (!user) return { code: 404, message: 'Usuario no encontrado' }
  const codeFound = await Code.findOne({
    where: {
      UserId: user.id,
      type,
    },
  })
  if (!codeFound) return { code: 404, message: 'Código no encontrado' }

  const expirationTime = new Date()
  expirationTime.setMinutes(expirationTime.getMinutes() + 5)

  const [codeUpdated] = await Code.update(
    {
      code: newCode,
      isValid: true,
      createdAt: new Date(),
      expirationTime,
    },
    {
      where: {
        UserId: user.id,
        type,
      },
    }
  )
  return codeUpdated > 0
    ? { code: 200, message: 'Código actualizado', user: user.dataValues }
    : { code: 404, message: 'Código no encontrado' }
}

export default {
  createCode,
  getCode,
  validateAccount,
  updateCode,
}
