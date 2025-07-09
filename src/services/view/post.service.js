import { View } from "../../lib/database.js";

const addViewProduct = async (ProductId, UserId = null) => {
  const where = {
    ProductId,
  };

  // Solo incluir UserId en la condición si existe
  if (UserId) {
    where.UserId = UserId;
  }

  const viewFound = await View.findOne({ where });

  if (viewFound) {
    await viewFound.update({
      lastView: new Date(),
      quantity: viewFound.quantity + 1,
    });
    return { code: 200 };
  }

  await View.create({
    ProductId,
    UserId, // puede ser null y debe estar permitido en el modelo
    lastView: new Date(),
    quantity: 1,
  });

  return { code: 201 };
};

export { addViewProduct };
