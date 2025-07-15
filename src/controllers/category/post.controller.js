import { cloudinaryHelpers } from "../../helpers/index.helpers.js";
import { categoryServices } from "../../services/index.services.js";

const createCategory = async (req, res) => {
  try {
    const data = req.body;
    const file = req.file;

    const secure_url = await cloudinaryHelpers.uploadFile(
      "categories",
      file.buffer,
      file.originalname
    );
    const { code, message, category } = await categoryServices.createCategory({
      ...data,
      image: secure_url,
    });

    res.status(code).json(category ? { message, category } : { message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { createCategory };
