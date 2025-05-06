import { envs } from '../index.config.js'

const { POSTGRES_URI_DEV, POSTGRES_URI_PROD } = envs

const DATABASE = {
  URI: POSTGRES_URI_DEV,
  OPTIONS: {
    native: false,
    logging: false,
  },
}

export { DATABASE }
