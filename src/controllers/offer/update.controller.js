import { offerServices } from "../../services/index.services.js";

const updateOffer = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const { code, message, offer } = await offerServices.updateOffer(id, data);

    res.status(code).json(offer ? { message, offer } : { message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { updateOffer };
