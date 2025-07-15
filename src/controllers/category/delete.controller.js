import { categoryServices } from "../../services/index.services.js";

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message } = await categoryServices.deleteCategory(id);
    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { deleteCategory };
