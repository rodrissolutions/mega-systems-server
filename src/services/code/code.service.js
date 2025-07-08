import { Code, User } from "../../lib/database.js";
import { codeUtils } from "../../utils/index.utils.js";
import { codeServices } from "../index.services.js";

const createCode = async (data) => {
  const { type, UserId, code } = data;
  const expirationTime = new Date();

  expirationTime.setMinutes(expirationTime.getMinutes() + 5);

  const user = await User.findOne({
    where: {
      id: UserId,
    },
  });
  if (!user) return { code: 404, message: "Usuario no encontrado" };

  const codeFound = await Code.findOne({
    where: {
      UserId,
      type,
      isValid: true,
    },
  });
  if (codeFound) return { code: 400, message: "Ya tienes un código creado" };
  const codeData = await Code.create({
    type,
    UserId,
    code,
    expirationTime,
  });

  return { code: 200, codeData: codeData.dataValues };
};

const getCode = async (email, type) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (!user) return { code: 404, message: "Usuario no encontrado" };

  const codeFound = await Code.findOne({
    where: {
      UserId: user.id,
      type,
    },
  });

  if (!codeFound) return { code: 404, message: "Codigo no encontrado" };
  return { code: 200, codeData: codeFound.dataValues };
};

const validateAccount = async (email, type, code) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) return { code: 404, message: "Usuario no encontrado" };
  const codeFound = await Code.findOne({
    where: {
      UserId: user.id,
      type,
      code,
    },
  });
  if (!codeFound) return { code: 404, message: "Código no encontrado" };
  if (!codeFound.isValid) return { code: 400, message: "Código no válido" };
  if (codeFound.expirationTime < new Date())
    return { code: 400, message: "El código ha expirado" };

  await Code.update(
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
  );

  await user.update({
    isVerified: true,
  });

  return { code: 200, message: "Cuenta verificada" };
};

const updateCode = async (email, type, newCode) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) return { code: 404, message: "Usuario no encontrado" };
  const codeFound = await Code.findOne({
    where: {
      UserId: user.id,
      type,
    },
  });
  if (!codeFound) return { code: 404, message: "Código no encontrado" };

  const expirationTime = new Date();
  expirationTime.setMinutes(expirationTime.getMinutes() + 5);

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
  );
  return codeUpdated > 0
    ? { code: 200, message: "Código actualizado", user: user.dataValues }
    : { code: 404, message: "Código no encontrado" };
};

const validateBuyCode = async (UserId, code) => {
  const user = await User.findByPk(UserId);
  if (!user) return { code: 404, message: "Usuario no encontrado" };

  const codeFound = await Code.findOne({
    where: {
      UserId,
      code,
    },
  });
  if (!codeFound) return { code: 404, message: "Código no encontrado" };

  if (codeFound.expirationTime < new Date()) {
    await codeFound.update({
      isValid: false,
    });
    return { code: 400, message: "El código ha expirado" };
  }

  if (!codeFound.isValid)
    return { code: 400, message: "Código no válido o ya utilizado" };

  await codeFound.update({
    isValid: false,
  });
  return { code: 200, message: "Código verificado con éxito" };
};

const generateNewVerificationAccountCode = async (data) => {
  const { email } = data;
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user)
    return { code: 404, message: "Usuario no encontrado o registrado" };
  const { id } = user;
  const codeFound = await Code.findOne({
    where: {
      UserId: id,
      type: "Verificación",
      isValid: true,
    },
  });
  if (codeFound) {
    await codeFound.update({
      isValid: false,
    });
  }

  const newCode = codeUtils.createCode();
  const expirationTime = new Date();
  expirationTime.setMinutes(expirationTime.getMinutes() + 5);

  const codeCreated = await Code.create({
    type: "Verificación",
    UserId: id,
    code: newCode,
    expirationTime: expirationTime,
  });

  return { code: 200, codeData: codeCreated, user };
};

export default {
  createCode,
  getCode,
  validateAccount,
  updateCode,
  validateBuyCode,
  generateNewVerificationAccountCode,
};
