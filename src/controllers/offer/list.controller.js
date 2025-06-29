import { offerServices } from "../../services/index.services.js";

const listAll = async (req, res) => {
  try {
    const { code, offers } = await offerServices.listAll();
    res.status(code).json({ offers });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { listAll };
