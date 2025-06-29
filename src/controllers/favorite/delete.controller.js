import { favoriteServices } from "../../services/index.services.js";

const deleteFavorite = async (req, res) => {
  try {
    const { ProductId, UserId } = req.query;
    const { code, message } = await favoriteServices.deleteFavorite(
      UserId,
      ProductId
    );
    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const deleteAllFavorites = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message } = await favoriteServices.deleteAllFavorites(id);
    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { deleteFavorite, deleteAllFavorites };
