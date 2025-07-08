import { Router } from "express";
import { residencyControllers } from "../../controllers/index.controllers.js";

const residencyRouter = Router();

residencyRouter.get("/user/:id", residencyControllers.getByUser);
residencyRouter.post("/", residencyControllers.saveResidency);
residencyRouter.put("/", residencyControllers.updateResidency);

export default residencyRouter;
