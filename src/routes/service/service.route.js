import { Router } from "express";
import { serviceControllers } from "../../controllers/index.controllers.js";
import { jwtMiddlewares } from "../../middlewares/index.middlewares.js";
import { multerHelpers } from "../../helpers/index.helpers.js";

const serviceRouter = Router();

serviceRouter.post(
  "/",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  multerHelpers.upload.single("image"),
  serviceControllers.createService
);
serviceRouter.get("/", serviceControllers.listAll);

serviceRouter.patch(
  "/with-image/:id",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  multerHelpers.upload.single("image"),
  serviceControllers.updateServiceWithImage
);

serviceRouter.patch(
  "/without-image/:id",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  serviceControllers.updateServiceWithoutImage
);

serviceRouter.delete(
  "/:id",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  serviceControllers.deleteService
);

export default serviceRouter;
