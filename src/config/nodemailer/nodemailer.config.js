import { envs } from '../index.config.js'

export const NODEMAILER_CONFIG = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: envs.GMAIL_DIR,
    pass: envs.GMAIL_PASSWORD,
  },
}
