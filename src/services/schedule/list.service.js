import { Schedule } from "../../lib/database.js";

const listAll = async () => {
  const schedules = await Schedule.findAll({});

  return { code: 200, schedules };
};

const listAllWorking = async () => {
  const schedules = await Schedule.findAll({
    where: {
      isWorking: true,
    },
  });
  return { code: 200, schedules };
};

export { listAll, listAllWorking };
