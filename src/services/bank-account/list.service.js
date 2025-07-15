import { BankAccount } from "../../lib/database.js";

const getAll = async () => {
  const bankAccounts = await BankAccount.findAll();

  return { code: 200, bankAccounts };
};

const getAllActives = async () => {
  const bankAccounts = await BankAccount.findAll({
    where: {
      active: true,
    },
  });

  return { code: 200, bankAccounts };
};

export { getAll, getAllActives };
