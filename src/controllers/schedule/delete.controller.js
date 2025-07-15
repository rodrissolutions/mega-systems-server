import { scheduleServices } from "../../services/index.services.js";

const deleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message } = await scheduleServices.deleteSchedule(id);

    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { deleteSchedule };
