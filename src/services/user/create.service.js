import { Cart, Role, User } from "../../lib/database.js";

const existUserByKey = async (key, value) => {
  const user = await User.findOne({ where: { [key]: value } });
  return user;
};

const createUser = async (data) => {
  const { phone, email, dni } = data;

  const userByPhone = await existUserByKey("phone", phone);
  if (userByPhone)
    return { code: 400, message: "El número de teléfono ya está registrado" };

  const userByEmail = await existUserByKey("email", email);
  if (userByEmail)
    return { code: 400, message: "El correo electrónico ya está registrado" };

  const userByDni = await existUserByKey("dni", dni);
  if (userByDni) return { code: 400, message: "El DNI ya está registrado" };

  const role = await Role.findOne({
    where: {
      name: "Cliente",
    },
  });

  const { id } = role;

  const user = await User.create({
    ...data,
    RoleId: id,
  });

  if (!user) return { code: 400, message: "Error al crear el usuario" };

  const cart = await Cart.findOne({
    where: {
      UserId: user.id,
    },
  });

  if (!cart) {
    await Cart.create({
      UserId: user.id,
    });
  }
  return {
    code: 200,
    user: user.dataValues,
    message: "Registro exitoso. Verifique su cuente por correo",
  };
};

export { createUser };
