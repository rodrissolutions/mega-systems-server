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
buyRouter.get("/hasPurchased", buyControllers.hasPurchased);

export default buyRouter;
