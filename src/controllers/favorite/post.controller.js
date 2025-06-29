import { favoriteServices } from "../../services/index.services.js";

const addFavorite = async (req, res) => {
  try {
    const { UserId, ProductId } = req.body;
    const { code, favorite, message } = await favoriteServices.addFavorite(
      UserId,
      ProductId
    );
    res.status(code).json(favorite ? { favorite, message } : { message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addFavorite };
