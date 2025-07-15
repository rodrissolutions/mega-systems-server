import { appointmentServices } from "../../services/index.services.js";

const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const { code, message } = await appointmentServices.updateAppointment(
      id,
      data
    );

    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { updateAppointment };
