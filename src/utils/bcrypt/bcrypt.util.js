import bcrypt from 'bcryptjs'
const { hash, compare } = bcrypt

const hashPassword = async (password) => await hash(password, 13)
const comparePassword = async (password, hashedPassword) =>
  await compare(password, hashedPassword)

export default {
  hashPassword,
  comparePassword,
}
