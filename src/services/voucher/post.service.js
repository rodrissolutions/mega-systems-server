import { Sale, Voucher } from "../../lib/database.js";

const saveVoucher = async (data) => {
  const { SaleId } = data;

  const saleFound = await Sale.findOne({
    where: {
      id: SaleId,
    },
  });
  if (!saleFound) return { code: 404, message: "Registro no encontrado" };

  const voucherFound = await Voucher.findOne({
    where: {
      SaleId,
    },
  });
  if (voucherFound) return { code: 400, message: "Ya existe un voucher" };

  const voucher = await Voucher.create(data);
  if (!voucher) return { code: 500, message: "Error al crear el voucher" };

  return { code: 201, voucher, message: "Voucher guardado exitosamente" };
};

export { saveVoucher };
