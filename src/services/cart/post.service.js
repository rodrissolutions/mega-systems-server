import { Cart, Item, Product } from "../../lib/database.js";

const addToCart = async (CartId, ProductId, quantity) => {
  const cart = await Cart.findByPk(CartId);
  const product = await Product.findByPk(ProductId);
  if (!cart) return { code: 404, message: "Carrito no encontrado" };
  if (!product) return { code: 404, message: "Producto no encontrado" };

  const itemFound = await Item.findOne({
    where: {
      CartId,
      ProductId,
    },
  });

  if (itemFound) {
    itemFound.quantity = quantity;
    await itemFound.save();
    return { code: 200, message: "Producto actualizado en el carrito" };
  }

  const item = await Item.create({
    CartId,
    ProductId,
    quantity,
  });
  return { code: 201, item, message: "Producto agregado al carrito" };
};

const incrementItem = async (id) => {
  const item = await Item.findOne({
    where: {
      id,
    },
  });

  if (!item) return { code: 404, message: "Item no encontrado" };
  item.quantity = item.quantity + 1;
  await item.save();
  return { code: 200, item };
};

const decrementItem = async (id) => {
  const item = await Item.findOne({
    where: {
      id,
    },
  });

  if (!item) return { code: 404, message: "Item no encontrado" };

  if (item.quantity === 1) {
    await item.destroy();
    return { code: 200, message: "Producto eliminado del carrito" };
  }
  item.quantity = item.quantity - 1;
  await item.save();
  return { code: 200, item };
};


export { addToCart, incrementItem, decrementItem };
