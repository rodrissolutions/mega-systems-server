import { Router } from "express";
import { buyControllers } from "../../controllers/index.controllers.js";

const buyRouter = Router();

buyRouter.get("/", buyControllers.listAll);
buyRouter.get("/user/:id", buyControllers.listByUser);

export default buyRouter;
