import { hasPurchased, listAll, listByUser } from "./list.controller.js";
import { saleWithDelivery, saleWithoutDelivery } from "./post.controller.js";
import { confirmPayment, updateSale } from "./update.controller.js";

export default {
  listAll,
  listByUser,
  saleWithDelivery,
  saleWithoutDelivery,
  hasPurchased,
  updateSale,
  confirmPayment,
};
