import { buyServices } from "../../services/index.services.js";

const listAll = async (req, res) => {
  try {
    const { code, sales } = await buyServices.listAll();
    res.status(code).json({ sales });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const listByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, sales, message } = await buyServices.listByUser(id);
    res.status(code).json(message ? { message } : { sales });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const hasPurchased = async (req, res) => {
  try {
    const { ProductId, UserId } = req.query;
    const bought = await buyServices.hasPurchased(UserId, ProductId);
    res.status(200).json({ bought });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export { listAll, listByUser, hasPurchased };
