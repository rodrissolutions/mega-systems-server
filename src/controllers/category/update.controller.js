import { cloudinaryHelpers } from "../../helpers/index.helpers.js";
import { categoryServices } from "../../services/index.services.js";

const updateCategoryWithImage = async (req, res) => {
  try {
    const { id } = req.params;
    const file = req.file;
    const data = req.body;

    const secure_url = await cloudinaryHelpers.uploadFile(
      "categories",
      file.buffer,
      file.originalname
    );

    const { code, message } = await categoryServices.updateCategory(id, {
      ...data,
      image: secure_url,
    });

    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const updateCategoryWithoutImage = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const { code, message } = await categoryServices.updateCategory(id, data);

    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { updateCategoryWithImage, updateCategoryWithoutImage };
