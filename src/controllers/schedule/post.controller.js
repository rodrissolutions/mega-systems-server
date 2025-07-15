import { scheduleServices } from "../../services/index.services.js";

const newSchedule = async (req, res) => {
  try {
    const data = req.body;
    const { code, message, newSchedule } = await scheduleServices.newSchedule(
      data
    );
    res.status(code).json(newSchedule ? { message, newSchedule } : { message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { newSchedule };
