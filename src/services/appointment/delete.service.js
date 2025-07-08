import { Appointment } from "../../lib/database.js";

const deleteAppointment = async (id) => {
  const appointment = await Appointment.findByPk(id);
  if (!appointment) return { code: 404, message: "Cita no encontrada" };
  await appointment.destroy();
  return { code: 200, message: "Cita eliminada exitosamente" };
};

export { deleteAppointment };
