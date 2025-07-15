import { deleteAppointment } from "./delete.controller.js";
import { listAll, listByUser } from "./list.controller.js";
import {
  checkAppointmentAvailability,
  generateAppointment,
} from "./post.controller.js";
import { updateAppointment } from "./update.controller.js";

export default {
  checkAppointmentAvailability,
  generateAppointment,
  listByUser,
  listAll,
  deleteAppointment,
  updateAppointment,
};
