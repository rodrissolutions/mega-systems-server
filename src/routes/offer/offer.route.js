import { Router } from "express";
import { offerControllers } from "../../controllers/index.controllers.js";

const offerRouter = Router();

offerRouter.get("/", offerControllers.listAll);

export default offerRouter;
