import { Product } from "../../lib/database.js";

const deleteProduct = async (id) => {
  const product = await Product.findOne({
    where: {
      id,
      isActive: true,
    },
  });

  if (!product) return { code: 404, message: "Producto no encontrado" };

  await product.update({ isActive: false });
  return { code: 200, message: "Producto eliminado" };
};

export { deleteProduct };
