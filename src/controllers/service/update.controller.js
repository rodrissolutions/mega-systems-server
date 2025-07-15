import { cloudinaryHelpers } from "../../helpers/index.helpers.js";
import { serviceServices } from "../../services/index.services.js";

const updateServiceWithImage = async (req, res) => {
  try {
    const { id } = req.params;
    const file = req.file;
    const data = req.body;
    const secure_url = await cloudinaryHelpers.uploadFile(
      "services",
      file.buffer,
      file.originalname
    );

    const { code, message } = await serviceServices.updateService(id, {
      ...data,
      image: secure_url,
    });
    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const updateServiceWithoutImage = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const { code, message } = await serviceServices.updateService(id, data);
    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { updateServiceWithImage, updateServiceWithoutImage };
