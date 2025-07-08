import { Cart, Category, Item, Product, User } from "../../lib/database.js";

const getByUser = async (UserId) => {
  const userFound = await User.findOne({
    where: {
      id: UserId,
    },
  });

  if (!userFound) return { code: 404, message: "Usuario no encontrado" };

  const cart = await Cart.findOne({
    where: {
      UserId,
    },
    include: {
      model: Item,
      include: {
        model: Product,
        include: [Category],
      },
      order: [["createdAt", "ASC"]],
    },
  });

  return { code: 200, cart };
};

export { getByUser };
