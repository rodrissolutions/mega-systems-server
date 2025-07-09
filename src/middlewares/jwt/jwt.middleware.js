import { request, response } from "express";
import { Role, User } from "../../lib/database.js";
import { jwtUtils } from "../../utils/index.utils.js";

const validateJWT = async (req = request, resp = response, next) => {
  const token = req.header("x-token");
  if (!token)
    return resp
      .status(401)
      .json({ message: "Petición denegada. No existe token en la petición" });

  try {
    const { id } = jwtUtils.verifyToken(token);
    if (!id) {
      return resp.status(401).json({
        message: "Petición denegada. Token no válido",
      });
    }

    const user = await User.findOne({
      where: {
        id: id,
      },
      include: [Role],
    });

    if (!user) {
      return resp.status(401).json({
        message: "Petición denegada. Token no válido",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error.message);
    resp.status(401).json({
      message: "Petición denegada. Token no válido",
    });
  }
};

const isAdmin = async (req = request, res = response, next) => {
  if (!req.user)
    return res.status(401).json({
      message: "Petición denegada. Token no encontrado.",
    });

  const user = req.user;

  if (user.Role.name !== "Administrador") {
    return res.status(401).json({
      message:
        "Petición denegada. No cuentas con los permisos para esta acción",
    });
  }

  next();
};

export default {
  validateJWT,
  isAdmin,
};
