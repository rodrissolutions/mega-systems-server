import { Service } from "../../lib/database.js";

const deleteService = async (id) => {
  const service = await Service.findOne({
    where: {
      id,
    },
  });

  if (!service) return { code: 404, message: "Servicio no encontrado" };

  await service.update({
    isActive: false,
  });
  return { code: 200, message: "Servicio eliminado exitosamente" };
};

export { deleteService };
