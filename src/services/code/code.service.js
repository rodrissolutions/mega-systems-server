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

export default {
  createCode,
}
