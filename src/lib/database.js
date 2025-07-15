import { Sequelize } from "sequelize";
import { DATABASE } from "../config/index.config.js";
import { models } from "../models/index.models.js";
const sequelize = new Sequelize(DATABASE.URI, DATABASE.OPTIONS);

models.forEach((model) => model(sequelize));

const {
  Answer,
  Appointment,
  AdditionalValue,
  Cart,
  Category,
  Company,
  Favorite,
  Delivery,
  Item,
  Product,
  Residency,
  Review,
  Role,
  Sale,
  SaleDetail,
  Schedule,
  Service,
  ServiceDetail,
  User,
  View,
  Voucher,
  Code,
  Offer,
  Log,
  BankAccount,
} = sequelize.models;

Role.hasMany(User, { foreignKey: "RoleId" });
User.belongsTo(Role, { foreignKey: "RoleId" });

User.hasMany(Log, { foreignKey: "UserId" });
Log.belongsTo(User, { foreignKey: "UserId" });

User.hasMany(Company, { foreignKey: "AdminId" });
Company.belongsTo(User, { foreignKey: "AdminId" });

User.hasMany(Code, { foreignKey: "UserId" });
Code.belongsTo(User, { foreignKey: "UserId" });

User.hasOne(Residency, { foreignKey: "UserId" });
Residency.belongsTo(User, { foreignKey: "UserId" });

User.hasOne(Cart, { foreignKey: "UserId" });
Cart.belongsTo(User, { foreignKey: "UserId" });

Cart.hasMany(Item, { foreignKey: "CartId" });
Item.belongsTo(Cart, { foreignKey: "CartId" });

Product.hasMany(Item, { foreignKey: "ProductId" });
Item.belongsTo(Product, { foreignKey: "ProductId" });

User.hasMany(View, { foreignKey: "UserId" });
View.belongsTo(User, { foreignKey: "UserId" });

User.hasMany(Sale, { foreignKey: "UserId" });
Sale.belongsTo(User, { foreignKey: "UserId" });

User.hasMany(Review, { foreignKey: "UserId" });
Review.belongsTo(User, { foreignKey: "UserId" });

Product.hasMany(Review, { foreignKey: "ProductId" });
Review.belongsTo(Product, { foreignKey: "ProductId" });

Service.hasMany(Review, { foreignKey: "ServiceId" });
Review.belongsTo(Service, { foreignKey: "ServiceId" });

User.hasMany(Answer, { foreignKey: "UserId" });
Answer.belongsTo(User, { foreignKey: "UserId" });

// Cliente
User.hasMany(Appointment, { foreignKey: "UserId" });
// Técnico
User.hasMany(Appointment, { foreignKey: "TechnicianId" });
// Prroduct
Product.hasMany(Appointment, { foreignKey: "ProductId" });
// Servicio
Service.hasMany(Appointment, { foreignKey: "ServiceId" });

Appointment.belongsTo(User, { as: "Client", foreignKey: "UserId" });
Appointment.belongsTo(User, { as: "Technician", foreignKey: "TechnicianId" });
Appointment.belongsTo(Product, { foreignKey: "ProductId" });
Appointment.belongsTo(Service, { foreignKey: "ServiceId" });

Category.hasOne(Product, { foreignKey: "CategoryId" });
Product.belongsTo(Category, { foreignKey: "CategoryId" });

Product.hasMany(View, { foreignKey: "ProductId" });
View.belongsTo(Product, { foreignKey: "ProductId" });

Sale.hasMany(SaleDetail, { foreignKey: "SaleId" });
SaleDetail.belongsTo(Sale, { foreignKey: "SaleId" });

Product.hasMany(SaleDetail, { foreignKey: "ProductId" });
SaleDetail.belongsTo(Product, { foreignKey: "ProductId" });

Service.hasMany(ServiceDetail, { foreignKey: "ServiceId" });
ServiceDetail.belongsTo(Service, { foreignKey: "ServiceId" });

User.hasMany(ServiceDetail, { foreignKey: "UserId" });
ServiceDetail.belongsTo(User, { foreignKey: "UserId" });

User.hasMany(Favorite, { foreignKey: "UserId" });
Favorite.belongsTo(User, { foreignKey: "UserId" });

Product.hasMany(Favorite, { foreignKey: "ProductId" });
Favorite.belongsTo(Product, { foreignKey: "ProductId" });

Sale.hasOne(Delivery, { foreignKey: "SaleId" });
Delivery.belongsTo(Sale, { foreignKey: "SaleId" });

Sale.hasOne(Voucher, { foreignKey: "SaleId" });
Voucher.belongsTo(Sale, { foreignKey: "SaleId" });

export {
  sequelize,
  Answer,
  AdditionalValue,
  Appointment,
  Cart,
  Category,
  Code,
  Company,
  Item,
  Offer,
  Product,
  Residency,
  Review,
  Role,
  Sale,
  SaleDetail,
  Schedule,
  Service,
  ServiceDetail,
  User,
  View,
  Voucher,
  Favorite,
  Delivery,
  BankAccount,
};
