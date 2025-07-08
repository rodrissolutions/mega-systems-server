import { appointmentServices } from "../../services/index.services.js";

const checkAppointmentAvailability = async (req, res) => {
  try {
    const data = req.body;
    const { code, message } =
      await appointmentServices.checkAppointmentAvailability(data);
    res.status(code).json({ message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const generateAppointment = async (req, res) => {
  try {
    const data = req.body;
    const { code, appointment, message } =
      await appointmentServices.generateAppointment(data);

    res.status(code).json(appointment ? { message, appointment } : { message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { checkAppointmentAvailability, generateAppointment };
