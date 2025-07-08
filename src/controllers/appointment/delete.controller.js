import { appointmentServices } from "../../services/index.services.js";

const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message } = await appointmentServices.deleteAppointment(id);
    res.status(code).json({ message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { deleteAppointment };
