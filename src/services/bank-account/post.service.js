import { BankAccount } from "../../lib/database.js";

const createBankAccount = async (data) => {
  const { accountNumber } = data;

  const bankAccountFound = await BankAccount.findOne({
    where: {
      accountNumber,
    },
  });

  if (bankAccountFound)
    return {
      code: 400,
      message: "Ya existe una cuenta bancaria con ese número",
    };

  const bankAccount = await BankAccount.create(data);
  return {
    code: 201,
    bankAccount,
    message: "Cuenta bancaria creada exitosamente",
  };
};

export { createBankAccount };
