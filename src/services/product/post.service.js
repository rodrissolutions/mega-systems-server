import { Category, Product } from "../../lib/database.js";

const normalizeString = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const createProduct = async (data) => {
  const { CategoryId, name } = data;

  const category = await Category.findOne({
    where: { id: CategoryId },
  });

  if (!category) return { code: 404, message: "Categoría no encontrada" };

  if (!category.isValid) return { code: 400, message: "Categoría inválida" };

  const products = await Product.findAll({ attributes: ["id", "name"] });
  const nameNormalized = normalizeString(name);

  const productFound = products.find((product) => {
    return normalizeString(product.name) === nameNormalized;
  });

  if (productFound)
    return { code: 400, message: "Ya existe un producto con ese nombre" };

  const product = await Product.create(data);
  return { code: 201, product, message: "Producto creado exitosamente" };
};

export { createProduct };
