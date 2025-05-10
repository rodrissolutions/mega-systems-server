import { User, Residency } from '../../lib/database.js'

const getUserById = async (id) => {
  const user = await User.findOne(id, {
    include: {
      model: Residency,
    },
  })
  return user
    ? { code: 200, user: user.dataValues }
    : { code: 404, message: 'Usuario no encontrado' }
}

const getAll = async () => {
  const users = await User.findAll({
    include: {
      model: Residency,
    },
  })
  return { code: 200, users }
}

export { getUserById, getAll }
