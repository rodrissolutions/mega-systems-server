import express, { json } from 'express'
import cors from 'cors'
import logger from 'morgan'

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(json({ limit: '50mb' }))

export default app
