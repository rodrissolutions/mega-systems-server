import { deleteAllFavorites, deleteFavorite } from "./delete.service.js";
import { getAll, listByUser } from "./list.service.js";
import { addFavorite } from "./post.service.js";

export default {
  listByUser,
  addFavorite,
  deleteFavorite,
  deleteAllFavorites,
  getAll,
};
