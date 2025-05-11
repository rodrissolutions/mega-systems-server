import nodemailerHelper from '../../helpers/nodemailer/nodemailer.helper.js'
import { codeServices, userServices } from '../../services/index.services.js'
import { bcryptUtils, codeUtils } from '../../utils/index.utils.js'

const createUser = async (req, res) => {
  try {
    const { password, ...data } = req.body
    const hashedPassword = await bcryptUtils.hashPassword(password)
    const { code, message, user } = await userServices.createUser({
      ...data,
      password: hashedPassword,
    })

    if (user) {
      const newCode = codeUtils.createCode()
      const codeCreated = await codeServices.createCode({
        type: 'Verificación',
        UserId: user.id,
        code: newCode,
      })
      nodemailerHelper.verificationAccount(user.email, user.fullName, newCode)

      return res
        .status(code)
        .json({ message, expirationTime: codeCreated.expirationTime })
    }
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { createUser }
