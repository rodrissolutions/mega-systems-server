import { viewServices } from "../../services/index.services.js";

const getViews = async (req, res) => {
  try {
    const { code, views } = await viewServices.getViews();
    res.status(code).json({ views });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getViews };
