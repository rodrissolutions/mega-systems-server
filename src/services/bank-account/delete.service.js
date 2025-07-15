import { BankAccount } from "../../lib/database.js";

const deleteBankAccount = async (id) => {
  const bankAccount = await BankAccount.findOne({
    where: {
      id,
    },
  });
  if (!bankAccount)
    return { code: 404, message: "Cuenta bancaria no encontrada" };
  await bankAccount.destroy();
  return { code: 200, message: "Cuenta bancaria eliminada exitosamente" };
};

export { deleteBankAccount };
