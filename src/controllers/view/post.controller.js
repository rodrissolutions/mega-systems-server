import { viewServices } from "../../services/index.services.js";

const addViewProduct = async (req, res) => {
  try {
    const { ProductId, UserId } = req.body;
    const { code } = await viewServices.addViewProduct(ProductId, UserId);
    res.status(code).json({ code });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { addViewProduct };
