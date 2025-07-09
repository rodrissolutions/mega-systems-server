import { Router } from "express";
import { viewControllers } from "../../controllers/index.controllers.js";
import { jwtMiddlewares } from "../../middlewares/index.middlewares.js";

const viewRouter = Router();

viewRouter.post("/", viewControllers.addViewProduct);
viewRouter.get(
  "/",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  viewControllers.getViews
);

export default viewRouter;
