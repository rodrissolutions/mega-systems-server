import { cloudinaryHelpers } from "../../helpers/index.helpers.js";
import { productServices } from "../../services/index.services.js";

const updateProductWithImage = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const file = req.file;

    const secure_url = await cloudinaryHelpers.uploadFile(
      "products",
      file.buffer,
      file.originalname
    );

    const { code, message, product } = await productServices.updateProduct(id, {
      ...data,
      photo: secure_url,
    });
    res.status(code).json(product ? { message, product } : { message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const updateProductWithoutImage = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const { code, message, product } = await productServices.updateProduct(
      id,
      data
    );
    res.status(code).json(product ? { message, product } : { message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { updateProductWithImage, updateProductWithoutImage };
