import { Router } from "express";
import { categoryControllers } from "../../controllers/index.controllers.js";
import { jwtMiddlewares } from "../../middlewares/index.middlewares.js";
import { multerHelpers } from "../../helpers/index.helpers.js";

const categoryRouter = Router();
categoryRouter.post(
  "/",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  multerHelpers.upload.single("image"),
  categoryControllers.createCategory
);
categoryRouter.get("/", categoryControllers.listAll);

categoryRouter.patch(
  "/with-image/:id",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  multerHelpers.upload.single("image"),
  categoryControllers.updateCategoryWithImage
);

categoryRouter.patch(
  "/without-image/:id",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  categoryControllers.updateCategoryWithoutImage
);

categoryRouter.delete(
  "/:id",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  categoryControllers.deleteCategory
);

export default categoryRouter;
