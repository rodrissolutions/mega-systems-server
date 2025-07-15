import { cloudinaryHelpers } from "../../helpers/index.helpers.js";
import { serviceServices } from "../../services/index.services.js";

const createService = async (req, res) => {
  try {
    const data = req.body;
    const file = req.file;

    const secure_url = await cloudinaryHelpers.uploadFile(
      "services",
      file.buffer,
      file.originalname
    );

    const { code, message, service } = await serviceServices.createService({
      ...data,
      image: secure_url,
    });

    res.status(code).json(service ? { message, service } : { message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { createService };
