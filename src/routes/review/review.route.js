import { Router } from "express";
import { reviewControllers } from "../../controllers/index.controllers.js";

const reviewRouter = Router();

reviewRouter.post("/", reviewControllers.addReview);
reviewRouter.delete("/:id", reviewControllers.deleteReview);
export default reviewRouter;
