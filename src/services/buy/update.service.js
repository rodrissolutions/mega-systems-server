import { Sale, Voucher } from "../../lib/database.js";

const updateSale = async (id, data) => {
  const sale = await Sale.findOne({
    where: {
      id,
    },
  });

  if (!sale) return { code: 404, message: "Venta no encontrada" };

  const { VoucherId, status, observations } = data;

  const voucher = await Voucher.findOne({
    where: {
      id: VoucherId,
    },
  });
  if (!voucher) return { code: 404, message: "Voucher no encontrado" };

  await voucher.update({
    status,
    observations,
  });

  await sale.update({
    status,
  });
  return {
    code: 200,
    message: "Venta actualizada exitosamente",
    UserId: sale.UserId,
  };
};

const confirmPayment = async (id) => {
  const sale = await Sale.findOne({
    where: {
      id,
    },
  });
  if (!sale) return { code: 404, message: "Venta no encontrada" };
  await sale.update({
    status: "Pagada",
  });
  return {
    code: 200,
    message: "Venta actualizada exitosamente",
    UserId: sale.UserId,
  };
};

export { updateSale, confirmPayment };
