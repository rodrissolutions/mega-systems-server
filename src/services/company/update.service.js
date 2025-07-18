import { Company } from "../../lib/database.js";

const updateCompany = async (data, id) => {
  const company = await Company.findOne({
    where: {
      id,
    },
  });
  if (!company) return { code: 404, message: "Empresa no encontrada" };
  await company.update(data);
  return {
    code: 200,
    message: "Información de empresa actualizada exitosamente",
  };
};

export { updateCompany };
