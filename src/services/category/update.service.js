import { Category } from "../../lib/database.js";

const updateCategory = async (id, data) => {
  const category = await Category.findOne({
    where: {
      id,
    },
  });

  if (!category) return { code: 404, message: "Categoría no encontrada" };
  await category.update(data);
  return { code: 200, message: "Categoría actualizada exitosamente" };
};

export { updateCategory };
