import { serviceServices } from "../../services/index.services.js";

const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message } = await serviceServices.deleteService(id);

    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { deleteService };
