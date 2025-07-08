import { cartServices } from "../../services/index.services.js";

const getByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message, cart } = await cartServices.getByUser(id);
    res.status(code).json(cart ? { cart } : { message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getByUser };
