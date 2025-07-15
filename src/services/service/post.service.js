import { Service } from "../../lib/database.js";

const normalizeString = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const createService = async (data) => {
  const { name } = data;

  const services = await Service.findAll({ attributes: ["id", "name"] });
  const nameNormalized = normalizeString(name);

  const serviceFound = services.find((srv) => {
    return normalizeString(srv.name) === nameNormalized;
  });

  if (serviceFound)
    return { code: 400, message: "Ya existe un servicio con ese nombre" };

  const service = await Service.create(data);
  return { code: 201, service, message: "Servicio creado exitosamente" };
};

export { createService };
