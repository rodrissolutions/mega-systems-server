import {
  Category,
  Product,
  Sale,
  SaleDetail,
  User,
  Voucher,
} from "../../lib/database.js";

const listAll = async () => {
  const sales = await Sale.findAll({
    include: [
      {
        model: SaleDetail,
        include: {
          model: Product,
          include: [Category],
        },
      },
      {
        model: User,
      },
      {
        model: Voucher,
      },
    ],
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
    include: [
      {
        model: SaleDetail,
        include: {
          model: Product,
          include: [Category],
        },
      },
      {
        model: Voucher,
      },
    ],
  });

  return { code: 200, sales };
};

const hasPurchased = async (UserId, ProductId) => {
  const saleWithProduct = await Sale.findOne({
    where: {
      UserId,
      status: "Pagada",
    },
    include: {
      model: SaleDetail,
      where: {
        ProductId,
      },
    },
  });
  return !!saleWithProduct;
};

export { listAll, listByUser, hasPurchased };
