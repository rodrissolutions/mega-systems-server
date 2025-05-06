import { Sequelize } from 'sequelize'
import { DATABASE } from '../config/index.config.js'

const sequelize = new Sequelize(DATABASE.URI, DATABASE.OPTIONS)

export { sequelize }
