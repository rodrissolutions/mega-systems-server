import { deleteAppointment } from "./delete.service.js";
import { listAll, listByUser } from "./list.service.js";
import {
  checkAppointmentAvailability,
  generateAppointment,
} from "./post.service.js";
import { updateAppointment } from "./update.service.js";

export default {
  checkAppointmentAvailability,
  generateAppointment,
  listByUser,
  listAll,
  deleteAppointment,
  updateAppointment,
};
