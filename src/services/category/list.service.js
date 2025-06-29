import { Category } from "../../lib/database.js";

const listAll = async () => {
  const categories = await Category.findAll();
  return { code: 200, categories };
};

export { listAll };
