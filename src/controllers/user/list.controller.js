import { userServices } from "../../services/index.services.js";

const getAll = async (req, res) => {
  try {
    const { code, users } = await userServices.getAll();
    res.status(code).json({ users });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message, user } = await userServices.getUserById(id);
    res.status(code).json(user ? { user } : { message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { getAll, getUserById };
