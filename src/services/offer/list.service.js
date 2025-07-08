import { Offer } from "../../lib/database.js";

const listAll = async () => {
  const offer = await Offer.findOne({
    where: {
      isActive: true,
    },
  });
  return { code: 200, offer };
};

export { listAll };
