import {
  AdditionalValue,
  BankAccount,
  Cart,
  Category,
  Offer,
  Product,
  Role,
  Service,
  User,
} from "../lib/database.js";
import {
  additionalValues,
  bankAccounts,
  categories,
  offers,
  products,
  roles,
  services,
  users,
} from "../mocks/data.js";
import { bcryptUtils } from "../utils/index.utils.js";

const seed = async () => {
  // Categorias
  for (const category of categories) {
    await Category.findOrCreate({
      where: {
        name: category.name,
      },
      defaults: category,
    });
  }

  //   Obtener todas las categorias con sus IDs
  const dbCategories = await Category.findAll();
  const categoryMap = new Map();
  for (const cat of dbCategories) {
    categoryMap.set(cat.name, cat.id);
  }

  //   Mapear productos con el CategourId correcto
  const productsWithCategoryId = products.map((product) => {
    const { category, ...rest } = product;
    return {
      ...rest,
      CategoryId: categoryMap.get(category),
    };
  });

  //   Insertary productos
  for (const product of productsWithCategoryId) {
    await Product.findOrCreate({
      where: {
        name: product.name,
        color: product.color,
      },
      defaults: product,
    });
  }

  // Insertas servicios
  for (const service of services) {
    await Service.findOrCreate({
      where: {
        name: service.name,
      },
      defaults: service,
    });
  }

  // Insertar roles
  for (const role of roles) {
    await Role.findOrCreate({
      where: {
        name: role.name,
      },
      defaults: role,
    });
  }

  // Insertar valores adicionales

  for (const val of additionalValues) {
    await AdditionalValue.findOrCreate({
      where: {
        type: val.type,
      },
      defaults: val,
    });
  }

  // Insertar ofertas
  for (const offer of offers) {
    const data = {
      title: offer.title,
      description: offer.description,
      value: offer.value,
      typeValue: offer.typeValue,
      isActive: offer.isActive,
    };

    await Offer.findOrCreate({
      where: { title: offer.title },
      defaults: data,
    });
  }

  // Usuarios
  for (const user of users) {
    const { password, Role: roleName, ...rest } = user;

    // Obtener el rol desde la base de datos
    const role = await Role.findOne({ where: { name: roleName } });

    if (!role) {
      console.warn(`Rol no encontrado: ${roleName}`);
      continue;
    }

    // Hashear la contraseña
    const hashedPassword = await bcryptUtils.hashPassword(password);

    // Preparar el objeto para insertar
    const data = {
      ...rest,
      password: hashedPassword,
      RoleId: role.id,
    };

    // Insertar si no existe ya
    await User.findOrCreate({
      where: {
        email: user.email,
        dni: user.dni,
        phone: user.phone,
      },
      defaults: data,
    });
  }

  // CReacion del carrito
  const user = await User.findOne({
    where: {
      email: "maria.gomez85@gmail.com",
    },
  });

  const cart = await Cart.findOne({
    where: {
      UserId: user.id,
    },
  });

  if (!cart) {
    const { id } = user;
    await Cart.create({
      UserId: id,
    });
  }

  for (const bankAccount of bankAccounts) {
    await BankAccount.findOrCreate({
      where: { accountNumber: bankAccount.accountNumber },
      defaults: bankAccount,
    });
  }
};

export default seed;
