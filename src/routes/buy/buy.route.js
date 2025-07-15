import { Router } from "express";
import { buyControllers } from "../../controllers/index.controllers.js";
import { jwtMiddlewares } from "../../middlewares/index.middlewares.js";

const buyRouter = Router();

buyRouter.get(
  "/",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  buyControllers.listAll
);
buyRouter.get("/user/:id", buyControllers.listByUser);

buyRouter.post("/withDelivery", buyControllers.saleWithDelivery);
buyRouter.post("/withoutDelivery", buyControllers.saleWithoutDelivery);

buyRouter.get("/hasPurchased", buyControllers.hasPurchased);

buyRouter.put(
  "/:id",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  buyControllers.updateSale
);

buyRouter.patch(
  "/confirm-payment/:id",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  buyControllers.confirmPayment
);

export default buyRouter;
