import { getInfoCompany } from "./list.controller.js";
import { createCompany } from "./post.controller.js";
import { updateWithImage, updateWithoutImage } from "./update.controller.js";

export default {
  createCompany,
  updateWithImage,
  updateWithoutImage,
  getInfoCompany,
};
