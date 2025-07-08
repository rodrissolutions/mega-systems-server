import { cartServices } from "../../services/index.services.js";

const addToCart = async (req, res) => {
  try {
    const { CartId, ProductId, quantity } = req.body;
    const { code, message, item } = await cartServices.addToCart(
      CartId,
      ProductId,
      quantity
    );

    res.status(code).json(item ? { item, message } : { message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { addToCart };
