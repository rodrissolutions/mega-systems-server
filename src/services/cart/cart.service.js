import { removeItem } from "./delete.service.js";
import { getByUser } from "./list.service.js";
import { addToCart, decrementItem, incrementItem } from "./post.service.js";
import { decrementItemWithoutId, updateItemWithoutId } from "./put.service.js";

export default {
  getByUser,
  addToCart,
  incrementItem,
  decrementItem,
  updateItemWithoutId,
  decrementItemWithoutId,
  removeItem,
};
