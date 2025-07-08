import { Router } from "express";
import { viewControllers } from "../../controllers/index.controllers.js";

const viewRouter = Router();

viewRouter.post("/", viewControllers.addViewProduct);

export default viewRouter;
