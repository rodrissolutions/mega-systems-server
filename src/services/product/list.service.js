import { Category, Product, Review, User } from "../../lib/database.js";

const listAll = async () => {
  const products = await Product.findAll({
    where: {
      isActive: true,
    },
    include: [
      {
        model: Category,
      },
      {
        model: Review,
        include: [User],
      },
    ],
  });

  return { code: 200, products };
};

export { listAll };
