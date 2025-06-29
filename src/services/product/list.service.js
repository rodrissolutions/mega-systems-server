import { Category, Product, Review } from "../../lib/database.js";

const listAll = async () => {
  const products = await Product.findAll({
    include: [Category, Review],
  });

  return { code: 200, products };
};

export { listAll };
