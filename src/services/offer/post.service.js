import { Offer } from "../../lib/database.js";

const createOffer = async (data) => {
  const offerFound = await Offer.findOne({
    where: {
      isActive: true,
    },
  });

  if (offerFound) return { code: 400, message: "Ya hay una oferta activa" };

  const offer = await Offer.create(data);
  return { code: 201, offer, message: "Oferta creada exitosamente" };
};

export { createOffer };
