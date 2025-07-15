import { scheduleServices } from "../../services/index.services.js";

const listAll = async (req, res) => {
  try {
    const { code, schedules } = await scheduleServices.listAll();
    res.status(code).json({ schedules });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
const listAllWorking = async (req, res) => {
  try {
    const { code, schedules } = await scheduleServices.listAllWorking();
    res.status(code).json({ schedules });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { listAll, listAllWorking };
