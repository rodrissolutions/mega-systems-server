import {
  Appointment,
  Category,
  Product,
  Role,
  Service,
  User,
} from "../../lib/database.js";

const listByUser = async (id) => {
  const user = await User.findByPk(id);

  if (!user) return { code: 404, message: "Usuario no encontrado" };
  const appointments = await Appointment.findAll({
    where: {
      UserId: id,
    },

    include: [
      {
        model: Product,
        include: [Category],
      },
      {
        model: Service,
      },
    ],
  });

  return { code: 200, appointments };
};

const listAll = async () => {
  const appointments = await Appointment.findAll({
    include: [
      {
        model: Product,
        include: [Category],
      },
      {
        model: Service,
      },
      {
        model: User,
        as: "Client",
        include: [Role],
      },
      {
        model: User,
        as: "Technician",
        include: [Role],
      },
    ],
  });

  return { code: 200, appointments };
};

export { listByUser, listAll };
