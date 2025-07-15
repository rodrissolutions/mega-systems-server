import { offerServices } from "../../services/index.services.js";

const createOffer = async (req, res) => {
  try {
    const data = req.body;
    const { code, message, offer } = await offerServices.createOffer(data);

    res.status(code).json(offer ? { message, offer } : { message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { createOffer };
