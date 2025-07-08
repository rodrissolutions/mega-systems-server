import { View } from "../../lib/database.js";

const addViewProduct = async (ProductId, UserId) => {
  const viewFound = await View.findOne({
    where: {
      ProductId,
      UserId,
    },
  });

  if (viewFound) {
    await viewFound.update({
      lastView: new Date(),
      quantity: viewFound.quantity + 1,
    });
    return { code: 200 };
  }

  await View.create({
    ProductId,
    UserId,
    lastView: new Date(),
    quantity: 1,
  });
  return { code: 201 };
};

export { addViewProduct };
