import { favoriteServices } from "../../services/index.services.js";

const listByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, favorites } = await favoriteServices.listByUser(id);
    res.status(code).json({ favorites });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const { code, favorites } = await favoriteServices.getAll();

    res.status(code).json({ favorites });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { listByUser, getAll };
