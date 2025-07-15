import { Router } from "express";
import { scheduleControllers } from "../../controllers/index.controllers.js";
import { jwtMiddlewares } from "../../middlewares/index.middlewares.js";

const scheduleRouter = Router();

scheduleRouter.get("/", scheduleControllers.listAll);
scheduleRouter.get("/working", scheduleControllers.listAllWorking);

scheduleRouter.post(
  "/",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  scheduleControllers.newSchedule
);
scheduleRouter.delete(
  "/:id",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  scheduleControllers.deleteSchedule
);

export default scheduleRouter;
