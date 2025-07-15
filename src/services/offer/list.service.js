import { Offer } from "../../lib/database.js";

const getOffer = async () => {
  const offer = await Offer.findOne({
    where: {
      isActive: true,
    },
  });
  return { code: 200, offer };
};

const getAllOffers = async () => {
  const offers = await Offer.findAll();
  return { code: 200, offers };
};

export { getOffer, getAllOffers };
