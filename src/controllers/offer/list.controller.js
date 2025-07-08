import { offerServices } from "../../services/index.services.js";

const listAll = async (req, res) => {
  try {
    const { code, offer } = await offerServices.listAll();
    res.status(code).json({ offer });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { listAll };
