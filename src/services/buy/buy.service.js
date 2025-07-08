import { hasPurchased, listAll, listByUser } from "./list.service.js";
import { saleWithDelivery, saleWithoutDelivery } from "./post.service.js";

export default {
  listAll,
  listByUser,
  saleWithDelivery,
  saleWithoutDelivery,
  hasPurchased,
};
