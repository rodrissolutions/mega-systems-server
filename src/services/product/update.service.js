import { Product } from "../../lib/database.js";

const updateProduct = async (id, data) => {
  const product = await Product.findOne({
    where: {
      id,
      isActive: true,
    },
  });

  if (!product) return { code: 404, message: "Producto no encontrado" };

  await product.update(data);
  return { code: 200, message: "Producto actualizado" };
};

export { updateProduct };
