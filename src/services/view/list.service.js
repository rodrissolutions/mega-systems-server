import { Product, User, View } from "../../lib/database.js";

const getViews = async () => {
  const views = await View.findAll({
    include: [Product, User],
  });

  return { code: 200, views };
};

export { getViews };
