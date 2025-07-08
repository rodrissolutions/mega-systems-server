import { Residency } from "../../lib/database.js";

const updateResidency = async (data) => {
  const { UserId } = data;
  const residency = await Residency.update(data, {
    where: {
      UserId,
    },
  });
  return {
    code: 200,
    residency,
    message: "Ubicación actualizada exitosamente",
  };
};

export { updateResidency };
