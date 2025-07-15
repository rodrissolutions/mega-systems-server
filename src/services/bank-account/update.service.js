import { BankAccount } from "../../lib/database.js";

const updateBankAccount = async (id, data) => {
  const bankAccount = await BankAccount.findOne({
    where: {
      id,
    },
  });
  if (!bankAccount)
    return { code: 404, message: "Cuenta bancaria no encontrada" };
  await bankAccount.update(data);
  return { code: 200, message: "Cuenta bancaria actualizada exitosamente" };
};

export { updateBankAccount };
