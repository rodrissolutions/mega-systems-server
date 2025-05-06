import app from './src/app.js'
import { envs } from './src/config/index.config.js'

app.listen(envs.PORT, () => {
  console.log(`Server funcionando en http://localhost:${envs.PORT}`)
})
