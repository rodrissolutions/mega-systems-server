import { reviewServices } from "../../services/index.services.js";

const listAll = async (req, res) => {
  try {
    const { code, reviews } = await reviewServices.listAll();
    res.status(code).json({ reviews });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { listAll };
