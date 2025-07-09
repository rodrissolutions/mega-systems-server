import { deleteAllFavorites, deleteFavorite } from "./delete.controller.js";
import { getAll, listByUser } from "./list.controller.js";
import { addFavorite } from "./post.controller.js";
export default {
  listByUser,
  addFavorite,
  deleteFavorite,
  deleteAllFavorites,
  getAll,
};
