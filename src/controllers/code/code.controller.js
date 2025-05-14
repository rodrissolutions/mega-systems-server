import nodemailerHelper from '../../helpers/nodemailer/nodemailer.helper.js'
import { codeServices } from '../../services/index.services.js'
import { codeUtils } from '../../utils/index.utils.js'

const getCode = async (req, res) => {
  try {
    const { email, type } = req.query
    console.log(email, type)
    const { code, message, codeData } = await codeServices.getCode(email, type)
    res.status(code).json(codeData ? { codeData } : { message })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const validateAccount = async (req, res) => {
  try {
    const data = req.body
    const { email, type, code } = data
    const { code: codeResponse, message } = await codeServices.validateAccount(
      email,
      type,
      code
    )
    res.status(codeResponse).json({ message })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateCode = async (req, res) => {
  try {
    const { email, type } = req.body
    const newCode = codeUtils.createCode()
    const { code, message, user } = await codeServices.updateCode(
      email,
      type,
      newCode
    )
    if (code === 200) {
      const { code, message, codeData } = await codeServices.getCode(
        email,
        type
      )
      nodemailerHelper.verificationAccount(user.email, user.fullName, newCode)

      return res.status(code).json(codeData ? { codeData } : { message })
    }

    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export default {
  getCode,
  validateAccount,
  updateCode,
}
