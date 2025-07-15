import { Router } from "express";
import { appointmentControllers } from "../../controllers/index.controllers.js";
import { jwtMiddlewares } from "../../middlewares/index.middlewares.js";

const appointmentRouter = Router();

appointmentRouter.get(
  "/",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  appointmentControllers.listAll
);

appointmentRouter.post(
  "/checkAvailability",
  appointmentControllers.checkAppointmentAvailability
);

appointmentRouter.post("/generate", appointmentControllers.generateAppointment);

appointmentRouter.get("/user/:id", appointmentControllers.listByUser);

appointmentRouter.delete("/:id", appointmentControllers.deleteAppointment);

appointmentRouter.put(
  "/:id",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  appointmentControllers.updateAppointment
);

export default appointmentRouter;
