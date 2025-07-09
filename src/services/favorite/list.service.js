import {
  Category,
  Favorite,
  Product,
  Review,
  User,
} from "../../lib/database.js";

const listByUser = async (UserId) => {
  const favorites = await Favorite.findAll({
    where: {
      UserId,
    },
    include: {
      model: Product,
      include: [Category, Review],
    },
  });
  return { code: 200, favorites };
};

const getAll = async () => {
  const favorites = await Favorite.findAll({
    include: [Product, User],
  });

  return { code: 200, favorites };
};

export { listByUser, getAll };
