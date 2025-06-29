import {
  AdditionalValue,
  Category,
  Offer,
  Product,
  Role,
  Service,
  User,
} from "../lib/database.js";
import {
  additionalValues,
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
      type: offer.type,
      typeValue: offer.typeValue,
      value: offer.value,
      startDate: offer.startDate,
      endDate: offer.endDate,
      isActive: offer.isActive,
    };

    if (offer.category) {
      const category = await Category.findOne({
        where: {
          name: offer.category,
        },
      });
      if (category) data.CategoryId = category.id;
    }

    if (offer.product) {
      const product = await Product.findOne({
        where: {
          name: offer.product,
        },
      });
      if (product) data.ProductId = product.id;
    }

    if (offer.service) {
      const service = await Service.findOne({
        where: {
          name: offer.service,
        },
      });
      if (service) data.ServiceId = service.id;
    }

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
};

export default seed;
