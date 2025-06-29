import { Favorite, Product, User } from "../../lib/database.js";

const deleteFavorite = async (UserId, ProductId) => {
  console.log(UserId, ProductId);
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

  if (!favoriteFound)
    return { code: 400, message: "Producto no encontrado en favoritos" };
  await favoriteFound.destroy();
  return { code: 201, message: "Producto eliminado de favoritos" };
};

const deleteAllFavorites = async (UserId) => {
  const user = await User.findByPk(UserId);
  if (!user) return { code: 404, message: "Usuario no encontrado" };
  await Favorite.destroy({
    where: {
      UserId,
    },
  });
  return { code: 201, message: "Productos eliminados de favoritos" };
};

export { deleteFavorite, deleteAllFavorites };
