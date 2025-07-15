import { productServices } from "../../services/index.services.js";

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message } = await productServices.deleteProduct(id);
    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { deleteProduct };
