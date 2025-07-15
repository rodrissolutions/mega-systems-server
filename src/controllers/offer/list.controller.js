import { offerServices } from "../../services/index.services.js";

const getOffer = async (req, res) => {
  try {
    const { code, offer } = await offerServices.getOffer();
    res.status(code).json({ offer });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getAllOffers = async (req, res) => {
  try {
    const { code, offers } = await offerServices.getAllOffers();
    res.status(code).json({ offers });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { getOffer, getAllOffers };
