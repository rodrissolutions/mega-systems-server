import { Router } from "express";
import { productControllers } from "../../controllers/index.controllers.js";
import { jwtMiddlewares } from "../../middlewares/index.middlewares.js";
import { multerHelpers } from "../../helpers/index.helpers.js";

const productRouter = Router();

productRouter.post(
  "/",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  multerHelpers.upload.single("photo"),
  productControllers.createProduct
);

productRouter.get("/", productControllers.lisAll);

productRouter.delete(
  "/:id",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  productControllers.deleteProduct
);

productRouter.patch(
  "/with-image/:id",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  multerHelpers.upload.single("photo"),
  productControllers.updateProductWithImage
);
productRouter.patch(
  "/without-image/:id",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  productControllers.updateProductWithoutImage
);

export default productRouter;
