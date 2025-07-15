import { buyServices } from "../../services/index.services.js";

const updateSale = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const { code, message } = await buyServices.updateSale(id, data);
    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

const confirmPayment = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message } = await buyServices.confirmPayment(id);
    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { updateSale, confirmPayment };
