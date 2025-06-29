import { Offer } from "../../lib/database.js";

const listAll = async () => {
  const offers = await Offer.findAll();
  return { code: 200, offers };
};

export { listAll };
