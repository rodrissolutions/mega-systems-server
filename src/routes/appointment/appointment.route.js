import { Router } from "express";
import { appointmentControllers } from "../../controllers/index.controllers.js";

const appointmentRouter = Router();

appointmentRouter.post(
  "/checkAvailability",
  appointmentControllers.checkAppointmentAvailability
);

appointmentRouter.post("/generate", appointmentControllers.generateAppointment);

appointmentRouter.get("/user/:id", appointmentControllers.listByUser);

appointmentRouter.delete("/:id", appointmentControllers.deleteAppointment);

export default appointmentRouter;
