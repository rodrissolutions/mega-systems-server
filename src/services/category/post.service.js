import { Category } from "../../lib/database.js";

const normalizeString = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const createCategory = async (data) => {
  const { name } = data;

  const categories = await Category.findAll({ attributes: ["id", "name"] });
  const nameNormalized = normalizeString(name);

  const categoryFound = categories.find((category) => {
    return normalizeString(category.name) === nameNormalized;
  });

  if (categoryFound)
    return { code: 400, message: "Ya existe una categoría con ese nombre" };

  const category = await Category.create(data);
  return { code: 201, category, message: "Categoría creada exitosamente" };
};

export { createCategory };
