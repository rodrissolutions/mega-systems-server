import { Appointment, Service, User } from "../../lib/database.js";

const checkAppointmentAvailability = async ({ date, time }) => {
  const startTime = new Date(`${date}T${time}`);
  const endTime = new Date(startTime.getTime() + 20 * 60000); // +20 minutos

  const appointments = await Appointment.findAll({
    where: { date },
    attributes: ["time"],
  });

  // Verificamos si hay solapamientos
  const isAvailable = !appointments.some((appt) => {
    const apptStart = new Date(`${date}T${appt.time}`);
    const apptEnd = new Date(apptStart.getTime() + 20 * 60000);

    return startTime < apptEnd && endTime > apptStart; // Condición de intersección
  });

  if (isAvailable) {
    return { code: 200, message: "Horario disponible" };
  } else {
    return { code: 409, message: "El horario está ocupado" };
  }
};

const generateAppointment = async (data) => {
  const { UserId, ServiceId, ProductId } = data;

  const user = await User.findByPk(UserId);
  const service = await Service.findByPk(ServiceId);

  if (!user) return { code: 404, message: "Usuario no encontrado" };
  if (!service) return { code: 404, message: "Servicio no encontrado" };

  if (ProductId) {
    const product = await Product.findByPk(ProductId);
    if (!product) return { code: 404, message: "Producto no encontrado" };
  }
  const appointment = await Appointment.create(data);
  return { code: 201, appointment, message: "Cita generada exitosamente" };
};

export { checkAppointmentAvailability, generateAppointment };
