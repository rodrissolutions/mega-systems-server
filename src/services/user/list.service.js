import { User, Residency, Role } from "../../lib/database.js";

const getUserById = async (id) => {
  const user = await User.findOne({
    where: {
      id: id,
    },
    include: [Residency, Role],

    attributes: {
      exclude: ["password"],
    },
  });
  return user
    ? { code: 200, user: user.dataValues }
    : { code: 404, message: "Usuario no encontrado" };
};

const getAll = async () => {
  const users = await User.findAll({
    include: [Residency, Role],
    attributes: {
      exclude: ["password"],
    },
  });
  return { code: 200, users };
};

export { getUserById, getAll };
