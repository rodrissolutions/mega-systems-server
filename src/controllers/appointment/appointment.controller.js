import { deleteAppointment } from "./delete.controller.js";
import { listByUser } from "./list.controller.js";
import {
  checkAppointmentAvailability,
  generateAppointment,
} from "./post.controller.js";

export default {
  checkAppointmentAvailability,
  generateAppointment,
  listByUser,
  deleteAppointment,
};
