import { deleteService } from "./delete.controller.js";
import { listAll } from "./list.service.js";
import { createService } from "./post.controller.js";
import {
  updateServiceWithImage,
  updateServiceWithoutImage,
} from "./update.controller.js";

export default {
  listAll,
  createService,
  updateServiceWithImage,
  updateServiceWithoutImage,
  deleteService,
};
