import { Sequelize } from 'sequelize'
import { DATABASE } from '../config/index.config.js'
import { models } from '../models/index.models.js'
const sequelize = new Sequelize(DATABASE.URI, DATABASE.OPTIONS)

models.forEach((model) => model(sequelize))

const {
  Answer,
  Appointment,
  Car,
  Category,
  Company,
  Item,
  Product,
  Residency,
  Review,
  Sale,
  SaleDetail,
  Schedule,
  Service,
  ServiceDetail,
  User,
  View,
  Voucher,
} = sequelize.models

User.hasMany(Company, { foreignKey: 'AdminId' })
Company.belongsTo(User, { foreignKey: 'AdminId' })

Company.hasMany(Schedule, { foreignKey: 'CompanyId' })
Schedule.belongsTo(Company, { foreignKey: 'CompanyId' })

User.hasOne(Residency, { foreignKey: 'UserId' })
Residency.belongsTo(User, { foreignKey: 'UserId' })

User.hasOne(Car, { foreignKey: 'UserId' })
Car.belongsTo(User, { foreignKey: 'UserId' })

Car.hasMany(Item, { foreignKey: 'CarId' })
Item.belongsTo(Car, { foreignKey: 'CarId' })

Product.hasMany(Item, { foreignKey: 'ProductId' })
Item.belongsTo(Product, { foreignKey: 'ProductId' })

User.hasMany(View, { foreignKey: 'UserId' })
View.belongsTo(User, { foreignKey: 'UserId' })

User.hasMany(Sale, { foreignKey: 'UserId' })
Sale.belongsTo(User, { foreignKey: 'UserId' })

User.hasMany(Review, { foreignKey: 'UserId' })
Review.belongsTo(User, { foreignKey: 'UserId' })

Product.hasMany(Review, { foreignKey: 'ProductId' })
Review.belongsTo(Product, { foreignKey: 'ProductId' })

User.hasMany(Answer, { foreignKey: 'UserId' })
Answer.belongsTo(User, { foreignKey: 'UserId' })

User.hasMany(Appointment, { foreignKey: 'UserId' })
Appointment.belongsTo(User, { foreignKey: 'UserId' })

Product.hasMany(Appointment, { foreignKey: 'ProductId' })
Appointment.belongsTo(Product, { foreignKey: 'ProductId' })

Category.hasOne(Product, { foreignKey: 'CategoryId' })
Product.belongsTo(Category, { foreignKey: 'CategoryId' })

Category.hasOne(Service, { foreignKey: 'CategoryId' })
Service.belongsTo(Category, { foreignKey: 'CategoryId' })

Product.hasMany(View, { foreignKey: 'ProductId' })
View.belongsTo(Product, { foreignKey: 'ProductId' })

Sale.hasMany(SaleDetail, { foreignKey: 'SaleId' })
SaleDetail.belongsTo(Sale, { foreignKey: 'SaleId' })

Product.hasMany(SaleDetail, { foreignKey: 'ProductId' })
SaleDetail.belongsTo(Product, { foreignKey: 'ProductId' })

Service.hasMany(ServiceDetail, { foreignKey: 'ServiceId' })
ServiceDetail.belongsTo(Service, { foreignKey: 'ServiceId' })

User.hasMany(ServiceDetail, { foreignKey: 'UserId' })
ServiceDetail.belongsTo(User, { foreignKey: 'UserId' })

export {
  sequelize,
  Answer,
  Appointment,
  Car,
  Category,
  Company,
  Item,
  Product,
  Residency,
  Review,
  Sale,
  SaleDetail,
  Schedule,
  Service,
  ServiceDetail,
  User,
  View,
  Voucher,
}
