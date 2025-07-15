import { deleteProduct } from "./delete.controller.js";
import { lisAll } from "./list.controller.js";
import { createProduct } from "./post.controller.js";
import {
  updateProductWithImage,
  updateProductWithoutImage,
} from "./update.controller.js";

export default {
  lisAll,
  createProduct,
  deleteProduct,
  updateProductWithImage,
  updateProductWithoutImage,
};
