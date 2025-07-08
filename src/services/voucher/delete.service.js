import { Voucher } from "../../lib/database.js";

const deleteVoucher = async (id) => {
  const voucher = await Voucher.findOne({
    where: {
      id,
    },
  });

  if (!voucher) return { code: 404, message: "Voucher no encontrado" };

  await voucher.destroy();
  return { code: 200, message: "Comprobante eliminado exitosamente" };
};

export { deleteVoucher };
