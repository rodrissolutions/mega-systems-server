import { bankAccountServices } from "../../services/index.services.js";

const getAll = async (req, res) => {
  try {
    const { code, bankAccounts } = await bankAccountServices.getAll();

    res.status(code).json({ bankAccounts });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getAllActives = async (req, res) => {
  try {
    const { code, bankAccounts } = await bankAccountServices.getAllActives();

    res.status(code).json({ bankAccounts });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { getAll, getAllActives };
