import 'dotenv/config'

const { PORT = 3000, POSTGRES_URI_DEV, POSTGRES_URI_PROD } = process.env

export default { PORT, POSTGRES_URI_DEV, POSTGRES_URI_PROD }
