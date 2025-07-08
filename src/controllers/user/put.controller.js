import { cloudinaryHelpers } from "../../helpers/index.helpers.js";
import { userServices } from "../../services/index.services.js";

const updateUserWithImage = async (req, res) => {
  try {
    const file = req.file;
    const { id } = req.params;
    const data = req.body;

    console.log(file);
    console.log(id);
    console.log(data);

    let photo = null;

    if (file) {
      photo = await cloudinaryHelpers.uploadFile(
        "users",
        file.buffer,
        file.originalname
      );
    }

    const { code, message, user } = await userServices.updateUser(id, {
      ...data,
      photo,
    });
    if (user) {
      return res.status(code).json({ message, user });
    } else {
      return res.status(code).json({ message });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUserWithoutImage = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const { code, message, user } = await userServices.updateUser(id, data);

    res.status(code).json(user ? { user, message } : { message });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export { updateUserWithImage, updateUserWithoutImage };
