import { json } from "sequelize";
import { cartServices } from "../../services/index.services.js";

const removeItem = async (req, res) => {
  try {
    const { CartId, ProductId } = req.query;
    const { code, message } = await cartServices.removeItem({
      CartId,
      ProductId,
    });

    res.status(code).json({ message });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export { removeItem };
