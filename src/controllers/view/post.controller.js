import { viewServices } from "../../services/index.services.js";

const addViewProduct = async (req, res) => {
  try {
    const { ProductId, UserId = null } = req.body;

    if (!ProductId) {
      return res.status(400).json({ message: "ProductId es requerido" });
    }

    const { code } = await viewServices.addViewProduct(ProductId, UserId);
    return res.status(code).json({ code });
  } catch (error) {
    console.error("Error al registrar la vista:", error.message);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export { addViewProduct };
