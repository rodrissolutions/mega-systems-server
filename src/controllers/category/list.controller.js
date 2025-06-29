import { categoryServices } from "../../services/index.services.js";

const listAll = async (req, res) => {
  try {
    const { code, categories } = await categoryServices.listAll();
    res.status(code).json({ categories });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { listAll };
