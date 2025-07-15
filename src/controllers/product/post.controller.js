import { cloudinaryHelpers } from "../../helpers/index.helpers.js";
import { productServices } from "../../services/index.services.js";

const createProduct = async (req, res) => {
  try {
    const data = req.body;
    const file = req.file;

    // 👉 Parsear specification si viene como string
    if (typeof data.specification === "string") {
      try {
        data.specification = JSON.parse(data.specification);
      } catch (error) {
        return res.status(400).json({
          message: "El campo 'specification' no tiene un formato JSON válido.",
        });
      }
    }

    const secure_url = await cloudinaryHelpers.uploadFile(
      "products",
      file.buffer,
      file.originalname
    );

    const { code, message, product } = await productServices.createProduct({
      ...data,
      photo: secure_url,
    });

    res.status(code).json(product ? { message, product } : { message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

export { createProduct };
