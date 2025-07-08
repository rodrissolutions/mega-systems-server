import { Item } from "../../lib/database.js";

const removeItem = async (data) => {
  const { CartId, ProductId } = data;

  const item = await Item.findOne({
    where: {
      CartId,
      ProductId,
    },
  });
  if (!item) return { code: 404, message: "Item no encontrado" };
  await item.destroy();
  return { code: 200, message: "Producto eliminado del carrito" };
};

export { removeItem };
