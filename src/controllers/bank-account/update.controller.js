import { bankAccountServices } from "../../services/index.services.js";

const updateBankAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const { code, message } = await bankAccountServices.updateBankAccount(
      id,
      data
    );

    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { updateBankAccount };
