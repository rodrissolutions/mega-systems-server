import { Company, Role, User } from "../../lib/database.js";

const createCompany = async (data) => {
  const { AdminId } = data;

  const user = await User.findOne({
    where: {
      id: AdminId,
    },
  });

  if (!user) return { code: 404, message: "Usuario no encontrado" };

  const role = await Role.findOne({
    where: {
      id: user.RoleId,
    },
  });

  if (role.name !== "Administrador")
    return { code: 400, message: "El usuario no es administrador" };

  const company = await Company.create(data);
  return {
    code: 201,
    company,
    message: "Información de empresa añadida exitosamente",
  };
};

export { createCompany };
