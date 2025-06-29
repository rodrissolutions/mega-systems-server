import { Service } from "../../lib/database.js";

const listAll = async () => {
  const services = await Service.findAll();
  return { code: 200, services };
};

export { listAll };
