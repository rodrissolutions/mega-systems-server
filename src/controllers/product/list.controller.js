import { productServices } from "../../services/index.services.js";

const lisAll = async (req, res) => {
  try {
    const { code, products } = await productServices.listAll();
    console.log(products);
    res.status(code).json({ products });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al obtener los productos: " + error.message,
    });
  }
};

export { lisAll };
