import { buyServices } from "../../services/index.services.js";

const saleWithDelivery = async (req, res) => {
  try {
    const { code, message } = await buyServices.saleWithDelivery(req.body);
    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { saleWithDelivery };
