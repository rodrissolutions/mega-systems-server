import app from "./src/app.js";
import { envs } from "./src/config/index.config.js";
import { sequelize } from "./src/lib/database.js";
import seed from "./src/scripts/seed.script.js";
sequelize
  .sync({
    logging: false,
    force: false,
    alter: true,
  })
  .then((res) => {
    console.log("Base de datos conectada correctamente");
    app.listen(envs.PORT, () => {
      console.log(`Server funcionando por el puerto :${envs.PORT}`);
    });

    seed();
  })
  .catch((err) => {
    console.log(`Error en la conexión: ${err.message}`);
  });
