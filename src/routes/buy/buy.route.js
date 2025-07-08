import { Router } from "express";
import { buyControllers } from "../../controllers/index.controllers.js";

const buyRouter = Router();

buyRouter.get("/", buyControllers.listAll);
buyRouter.get("/user/:id", buyControllers.listByUser);

buyRouter.post("/withDelivery", buyControllers.saleWithDelivery);
buyRouter.get("/hasPurchased", buyControllers.hasPurchased);

export default buyRouter;
