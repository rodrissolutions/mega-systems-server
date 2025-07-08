import nodemailerHelper from "../../helpers/nodemailer/nodemailer.helper.js";
import { codeServices } from "../../services/index.services.js";
import { codeUtils } from "../../utils/index.utils.js";

const createCode = async (req, res) => {
  try {
    const { UserId, type, email, name } = req.body;
    const newCode = codeUtils.createCode();
    const { code, message, codeData } = await codeServices.createCode({
      code: newCode,
      type,
      UserId,
    });
    if (type === "Compra" && code === 200) {
      nodemailerHelper.buyConfirmation(email, name, newCode);
    }

    res.status(code).json(
      codeData
        ? {
            codeData,
            message: "Se ha enviado un código a tu correo electrónico",
          }
        : { message }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCode = async (req, res) => {
  try {
    const { email, type } = req.query;
    const { code, message, codeData } = await codeServices.getCode(email, type);
    res.status(code).json(codeData ? { codeData } : { message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const validateAccount = async (req, res) => {
  try {
    const data = req.body;
    const { email, type, code } = data;
    const { code: codeResponse, message } = await codeServices.validateAccount(
      email,
      type,
      code
    );
    res.status(codeResponse).json({ message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCode = async (req, res) => {
  try {
    const { email, type } = req.body;
    const newCode = codeUtils.createCode();
    const { code, message, user } = await codeServices.updateCode(
      email,
      type,
      newCode
    );
    if (code === 200) {
      const { code, message, codeData } = await codeServices.getCode(
        email,
        type
      );
      nodemailerHelper.verificationAccount(user.email, user.fullName, newCode);

      return res.status(code).json(codeData ? { codeData } : { message });
    }

    res.status(code).json({ message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const validateBuyCode = async (req, res) => {
  try {
    const { id: UserId } = req.params;
    const { code: data } = req.body;
    const { code, message } = await codeServices.validateBuyCode(UserId, data);

    res.status(code).json({ message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const generateNewVerificationAccountCode = async (req, res) => {
  try {
    const data = req.body;
    const { code, codeData, message, user } =
      await codeServices.generateNewVerificationAccountCode(data);

    if (code === 200) {
      nodemailerHelper.verificationAccount(
        user.email,
        user.fullName,
        codeData.code
      );
    }

    res.status(code).json(message ? { message } : { codeData });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export default {
  createCode,
  getCode,
  validateAccount,
  updateCode,
  validateBuyCode,
  generateNewVerificationAccountCode,
};
