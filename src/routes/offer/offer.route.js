import { Router } from "express";
import { offerControllers } from "../../controllers/index.controllers.js";
import { jwtMiddlewares } from "../../middlewares/index.middlewares.js";

const offerRouter = Router();

offerRouter.post(
  "/",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  offerControllers.createOffer
);
offerRouter.get("/", offerControllers.getOffer);
offerRouter.get(
  "/all",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  offerControllers.getAllOffers
);

offerRouter.patch(
  "/:id",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  offerControllers.updateOffer
);

export default offerRouter;
