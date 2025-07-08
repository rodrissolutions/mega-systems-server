import { Residency, User } from "../../lib/database.js";

const saveResidency = async (data) => {
  const { UserId } = data;

  const user = await User.findOne({
    where: {
      id: UserId,
    },
  });

  if (!user) return { code: 404, message: "Usuario no encontrado" };

  const residency = await Residency.create(data);
  return { code: 201, residency, message: "Ubicación guardada exitosamente" };
};

export { saveResidency };
