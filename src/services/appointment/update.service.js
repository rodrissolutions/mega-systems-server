import { Appointment, Role, User } from "../../lib/database.js";

const updateAppointment = async (id, data) => {
  const { TechnicianId } = data;

  const appointment = await Appointment.findOne({
    where: {
      id,
    },
  });

  if (!appointment) return { code: 404, message: "Cita no encontrada" };

  const role = await Role.findOne({
    where: {
      name: "Técnico",
    },
  });

  const user = await User.findOne({
    where: {
      id: TechnicianId,
    },
  });

  if (!user) return { code: 404, message: "Técnico no encontrado" };
  if (user.RoleId !== role.id)
    return { code: 400, message: "El usuario no es técnico" };

  await appointment.update(data);
  return { code: 200, message: "Cita actualizada exitosamente" };
};

export { updateAppointment };
