import { Cart, Product, Item } from "../../lib/database.js";

const updateItemWithoutId = async (ProductId, CartId) => {
  const product = await Product.findByPk(ProductId);
  const cart = await Cart.findByPk(CartId);

  if (!product) return { code: 404, message: "Producto no encontrado" };
  if (!cart) return { code: 404, message: "Carrito no encontrado" };

  const item = await Item.findOne({
    where: {
      CartId,
      ProductId,
    },
  });
  if (!item)
    return { code: 404, message: "Producto no encontrado en el carrito" };

  item.quantity = item.quantity + 1;
  await item.save();
  return { code: 200, item };
};

const decrementItemWithoutId = async (ProductId, CartId) => {
  const product = await Product.findByPk(ProductId);
  const cart = await Cart.findByPk(CartId);

  if (!product) return { code: 404, message: "Producto no encontrado" };
  if (!cart) return { code: 404, message: "Carrito no encontrado" };

  const item = await Item.findOne({
    where: {
      CartId,
      ProductId,
    },
  });
  if (!item)
    return { code: 404, message: "Producto no encontrado en el carrito" };

  if (item.quantity === 1) {
    await item.destroy();
    return { code: 200, message: "Producto eliminado del carrito" };
  }
  item.quantity = item.quantity - 1;
  await item.save();
  return { code: 200, item };
};

export { updateItemWithoutId, decrementItemWithoutId };
