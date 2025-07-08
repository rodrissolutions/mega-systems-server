import { createUser } from "./create.controller.js";
import { getAll, getUserById } from "./list.controller.js";
import {
  updateUserWithImage,
  updateUserWithoutImage,
} from "./put.controller.js";

export default {
  createUser,
  getAll,
  getUserById,
  updateUserWithImage,
  updateUserWithoutImage,
};
