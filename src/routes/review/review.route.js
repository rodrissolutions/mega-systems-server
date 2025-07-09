import { Router } from "express";
import { reviewControllers } from "../../controllers/index.controllers.js";
import { jwtMiddlewares } from "../../middlewares/index.middlewares.js";

const reviewRouter = Router();

reviewRouter.get(
  "/",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  reviewControllers.listAll
);

reviewRouter.post("/", reviewControllers.addReview);
reviewRouter.delete("/:id", reviewControllers.deleteReview);
export default reviewRouter;
