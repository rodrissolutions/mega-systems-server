import { Voucher } from "../../lib/database.js";

const updateVoucher = async (id, data) => {
  const voucher = await Voucher.findOne({
    where: {
      id,
    },
  });
  if (!voucher) return { code: 404, message: "Voucher no encontrado" };

  await voucher.update(data);
  return { code: 200, message: "Voucher actualizado exitosamente" };
};

export { updateVoucher };
