import { deleteCategory } from "./delete.controller.js";
import { listAll } from "./list.controller.js";
import { createCategory } from "./post.controller.js";
import {
  updateCategoryWithImage,
  updateCategoryWithoutImage,
} from "./update.controller.js";

export default {
  listAll,
  createCategory,
  updateCategoryWithImage,
  updateCategoryWithoutImage,
  deleteCategory,
};
