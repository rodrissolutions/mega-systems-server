import { Sale, Voucher } from "../../lib/database.js";

const updateVoucher = async (id, data) => {
  const { SaleId, photo } = data;
  const voucher = await Voucher.findOne({
    where: {
      id,
    },
  });
  if (!voucher) return { code: 404, message: "Voucher no encontrado" };

  const sale = await Sale.findOne({
    where: {
      id: SaleId,
    },
  });
  if (!sale) return { code: 404, message: "Venta no encontrada" };

  await voucher.update({
    status: "Pendiente",
    photo,
  });

  await sale.update({
    status: "Pendiente",
  });

  return { code: 200, message: "Voucher actualizado exitosamente" };
};

export { updateVoucher };
