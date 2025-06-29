import { Router } from "express";
import { serviceControllers } from "../../controllers/index.controllers.js";

const serviceRouter = Router();

serviceRouter.get("/", serviceControllers.listAll);

export default serviceRouter;
