import { Router } from "express";
import { companyControllers } from "../../controllers/index.controllers.js";
import { jwtMiddlewares } from "../../middlewares/index.middlewares.js";
import { multerHelpers } from "../../helpers/index.helpers.js";

const companyRouter = Router();

companyRouter.get("/", companyControllers.getInfoCompany);
companyRouter.post(
  "/",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  multerHelpers.upload.single("logo"),
  companyControllers.createCompany
);
companyRouter.patch(
  "/with-image/:id",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  multerHelpers.upload.single("logo"),
  companyControllers.updateWithImage
);
companyRouter.patch(
  "/without-image/:id",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  companyControllers.updateWithoutImage
);

export default companyRouter;
