import { Favorite, User, Product } from "../../lib/database.js";

const addFavorite = async (UserId, ProductId) => {
  const user = await User.findByPk(UserId);
  const product = await Product.findByPk(ProductId);

  if (!user) return { code: 404, message: "Usuario no encontrado" };
  if (!product) return { code: 404, message: "Producto no encontrado" };

  const favoriteFound = await Favorite.findOne({
    where: {
      UserId,
      ProductId,
    },
  });

  if (favoriteFound) return { code: 400, message: "Producto ya en favoritos" };
  const favorite = await Favorite.create({
    UserId,
    ProductId,
  });
  return { code: 201, favorite, message: "Producto agregado a favoritos" };
};

export { addFavorite };
