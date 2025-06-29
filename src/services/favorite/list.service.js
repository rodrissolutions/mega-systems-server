import { Category, Favorite, Product, Review } from "../../lib/database.js";

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

export { listByUser };
