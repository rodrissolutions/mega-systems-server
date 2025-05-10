import express, { json } from 'express'
import cors from 'cors'
import logger from 'morgan'
import rootRouter from './routes/index.routes.js'
const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(json({ limit: '50mb' }))

// rutas
app.use('/api/v1', rootRouter)

export default app
