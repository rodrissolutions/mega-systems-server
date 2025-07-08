import { Op } from "sequelize";
import { User } from "../../lib/database.js";

const updateUser = async (id, data) => {
  const user = await User.findOne({ where: { id } });

  if (!user) return { code: 404, message: "Usuario no encontrado" };

  const { phone } = data;

  // Verifica si el nuevo teléfono ya lo tiene otro usuario distinto
  if (phone) {
    const userByPhone = await User.findOne({
      where: {
        phone,
        id: { [Op.ne]: id }, // id diferente al actual
      },
    });

    if (userByPhone) {
      return {
        code: 400,
        message: "Este número de teléfono ya está en uso por otro usuario",
      };
    }
  }

  const [rows] = await User.update(data, { where: { id } });

  if (rows === 0)
    return { code: 400, message: "Error al actualizar el usuario" };

  const updatedUser = await User.findOne({
    where: { id },
    attributes: { exclude: ["password"] }, // Excluye la contraseña
  });

  return {
    code: 200,
    message: "Usuario actualizado correctamente",
    user: updatedUser,
  };
};

export { updateUser };
