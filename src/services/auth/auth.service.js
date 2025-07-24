import { Residency, Role, User } from "../../lib/database.js";
import { bcryptUtils } from "../../utils/index.utils.js";

const login = async (email, password) => {
  const user = await User.findOne({
    where: {
      email,
    },
    include: [Residency, Role],
  });
  if (!user) return { code: 401, message: "Credenciales incorrectas" };
  if (!user.isVerified) return { code: 401, message: "Cuenta no verificada" };
  const isValidPassword = await bcryptUtils.comparePassword(
    password,
    user.password
  );
  const { password: _, ...userWithoutPassword } = user.dataValues;
  if (!isValidPassword)
    return { code: 401, message: "Credenciales incorrectas" };

  return {
    code: 200,
    user: userWithoutPassword,
    message: `${user.gender === "Femenino" ? "Bienvenida " : "Bienvenido "} ${
      user.fullName
    }`,
  };
};

const changePassword = async (email, password) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) return { code: 404, message: "Usuario no encontrado" };

  const hashedPassword = await bcryptUtils.hashPassword(password);

  const { id } = user;

  const [rows] = await User.update(
    {
      password: hashedPassword,
    },
    {
      where: {
        id,
      },
    }
  );
  if (rows === 0)
    return { code: 400, message: "Error al cambiar la contraseña" };

  return { code: 200, message: "Contraseña cambiada con éxito", user };
};

export default { login, changePassword };
