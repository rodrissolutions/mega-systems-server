import { Schedule } from "../../lib/database.js";

const newSchedule = async (data) => {
  const { day } = data;
  const schedule = await Schedule.findOne({
    where: {
      day,
    },
  });
  if (schedule)
    return { code: 400, message: "Ya existe un horario para ese dia" };
  const newSchedule = await Schedule.create(data);
  return { code: 201, newSchedule, message: "Horario creado exitosamente" };
};

export { newSchedule };
