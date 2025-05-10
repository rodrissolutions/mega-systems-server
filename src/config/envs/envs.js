import 'dotenv/config'

const {
  PORT = 3000,
  POSTGRES_URI_DEV,
  POSTGRES_URI_PROD,
  SECRET_WORD,
} = process.env

export default { PORT, POSTGRES_URI_DEV, POSTGRES_URI_PROD, SECRET_WORD }
