import { bankAccountServices } from "../../services/index.services.js";

const createBankAccount = async (req, res) => {
  try {
    const data = req.body;
    const { code, message, bankAccount } =
      await bankAccountServices.createBankAccount(data);

    res.status(code).json(bankAccount ? { message, bankAccount } : { message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { createBankAccount };
