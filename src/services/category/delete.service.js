import { Category } from "../../lib/database.js";

const deleteCategory = async (id) => {
  const category = await Category.findOne({
    where: {
      id,
    },
  });
  if (!category) return { code: 404, message: "Categoría no encontrada" };
  await category.update({
    isValid: false,
  });
  return { code: 200, message: "Categoría eliminada exitosamente" };
};

export { deleteCategory };
