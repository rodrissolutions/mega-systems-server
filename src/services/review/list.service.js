import { Product, Review, User } from "../../lib/database.js";

const listAll = async () => {
  const reviews = await Review.findAll({
    include: [Product, User],
  });

  return { code: 200, reviews };
};

export { listAll };
