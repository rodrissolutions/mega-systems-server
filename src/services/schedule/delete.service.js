import { Schedule } from "../../lib/database.js";

const deleteSchedule = async (id) => {
  const schedule = await Schedule.findOne({
    where: {
      id,
    },
  });

  if (!schedule) return { code: 404, message: "Horario no encontrado" };

  await schedule.destroy();
  return { code: 200, message: "Horario eliminado exitosamente" };
};

export { deleteSchedule };
