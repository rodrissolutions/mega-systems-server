import app from './src/app.js'
import { envs } from './src/config/index.config.js'
import { sequelize } from './src/lib/database.js'

sequelize
  .sync({
    logging: false,
    force: true,
    alter: true,
  })
  .then((res) => {
    console.log('Base de datos conectada correctamente')
    app.listen(envs.PORT, () => {
      console.log(`Server funcionando en http://localhost:${envs.PORT}`)
    })
  })
  .catch((err) => {
    console.log(`Error en la conexión: ${err.message}`)
  })
