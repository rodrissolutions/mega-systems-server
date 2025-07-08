import { appointmentServices } from "../../services/index.services.js";

const listByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message, appointments } =
      await appointmentServices.listByUser(id);
    res.status(code).json(appointments ? { appointments } : { message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { listByUser };
