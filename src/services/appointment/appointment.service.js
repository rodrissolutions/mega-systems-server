import { deleteAppointment } from "./delete.service.js";
import { listByUser } from "./list.service.js";
import {
  checkAppointmentAvailability,
  generateAppointment,
} from "./post.service.js";

export default {
  checkAppointmentAvailability,
  generateAppointment,
  listByUser,
  deleteAppointment,
};
