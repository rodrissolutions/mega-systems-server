import { Sale, SaleDetail, User } from "../../lib/database.js";

const listAll = async () => {
  const sales = await Sale.findAll({
    include: [SaleDetail],
  });

  return { code: 200, sales };
};

const listByUser = async (UserId) => {
  const userFound = await User.findByPk(UserId);

  if (!userFound) return { code: 404, message: "Usuario no encontrado" };

  const sales = await Sale.findAll({
    where: {
      UserId,
    },
    include: [SaleDetail],
  });

  return { code: 200, sales };
};

export { listAll, listByUser };
