import { Router } from "express";
import { categoryControllers } from "../../controllers/index.controllers.js";

const categoryRouter = Router();

categoryRouter.get("/", categoryControllers.listAll);

export default categoryRouter;
