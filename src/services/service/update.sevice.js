import { Service } from "../../lib/database.js";

const updateService = async (id, data) => {
  const service = await Service.findOne({
    where: {
      id,
    },
  });
  if (!service) return { code: 404, message: "Servicio no encontrado" };
  await service.update(data);
  return { code: 200, message: "Servicio actualizado exitosamente" };
};

export { updateService };
