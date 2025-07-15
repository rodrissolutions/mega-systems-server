import { deleteProduct } from "./delete.service.js";
import { listAll } from "./list.service.js";
import { createProduct } from "./post.service.js";
import { updateProduct } from "./update.service.js";

export default {
  listAll,
  createProduct,
  deleteProduct,
  updateProduct,
};
