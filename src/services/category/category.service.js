import { deleteCategory } from "./delete.service.js";
import { listAll } from "./list.service.js";
import { createCategory } from "./post.service.js";
import { updateCategory } from "./update.service.js";

export default {
  listAll,
  createCategory,
  updateCategory,
  deleteCategory,
};
