import { Residency, User } from "../../lib/database.js";

const getByUser = async (UserId) => {
  const user = await User.findByPk(UserId);
  if (!user) return { code: 404, message: "Usuario no encontrado" };

  const residency = await Residency.findOne({
    where: {
      UserId,
    },
  });
  return { code: 200, residency };
};

export { getByUser };
