import { cartServices } from "../../services/index.services.js";

const incrementItem = async (req, res) => {
  try {
    const { ItemId } = req.body;
    const { code, item, message } = await cartServices.incrementItem(ItemId);
    res.status(code).json(item ? { item, message } : { message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const decrementItem = async (req, res) => {
  try {
    const { ItemId } = req.body;
    const { code, item, message } = await cartServices.decrementItem(ItemId);
    res.status(code).json(item ? { item, message } : { message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const updateItemWithoutId = async (req, res) => {
  try {
    const { CartId, ProductId } = req.body;
    const { code, item, message } = await cartServices.updateItemWithoutId(
      ProductId,
      CartId
    );
    res.status(code).json(item ? { item, message } : { message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const decrementItemWithoutId = async (req, res) => {
  try {
    const { CartId, ProductId } = req.body;
    const { code, item, message } = await cartServices.decrementItemWithoutId(
      ProductId,
      CartId
    );
    res.status(code).json(item ? { item, message } : { message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export {
  incrementItem,
  decrementItem,
  updateItemWithoutId,
  decrementItemWithoutId,
};
