import { Router } from "express";
import { productControllers } from "../../controllers/index.controllers.js";

const productRouter = Router();

productRouter.get("/", productControllers.lisAll);

export default productRouter;
