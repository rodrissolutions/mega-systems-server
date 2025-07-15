import { bankAccountServices } from "../../services/index.services.js";

const deleteBankAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message } = await bankAccountServices.deleteBankAccount(id);

    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { deleteBankAccount };
