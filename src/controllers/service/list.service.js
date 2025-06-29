import { serviceServices } from "../../services/index.services.js";

const listAll = async (req, res) => {
  try {
    const { code, services } = await serviceServices.listAll();
    res.status(code).json({ services });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { listAll };
