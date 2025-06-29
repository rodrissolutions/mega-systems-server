import { deleteAllFavorites, deleteFavorite } from "./delete.controller.js";
import { listByUser } from "./list.controller.js";
import { addFavorite } from "./post.controller.js";
export default {
  listByUser,
  addFavorite,
  deleteFavorite,
  deleteAllFavorites,
};
