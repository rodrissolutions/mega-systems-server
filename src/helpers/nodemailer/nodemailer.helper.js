import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import { envs, NODEMAILER_CONFIG } from "../../config/index.config.js";

const generatePathName = (filename) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const pathname = path.join(__dirname, `../../html/${filename}.html`);
  return pathname;
};

const send = async (to, file, subject) => {
  const transporter = nodemailer.createTransport(NODEMAILER_CONFIG);
  transporter.sendMail({
    from: envs.GMAIL_DIR,
    to,
    subject,
    html: file,
  });
};

const loginNotification = (to) => {
  const pathname = generatePathName("notification");
  const file = fs.readFileSync(pathname, { encoding: "utf-8" }).toString();

  send(to, file, "Inicio de sesión detectado");
};

const verificationAccount = (to, name, code) => {
  const pathname = generatePathName("verification");
  const file = fs
    .readFileSync(pathname, { encoding: "utf-8" })
    .toString()
    .replace("${name}", name)
    .replace("${code}", code);
  send(to, file, "Verificación de cuenta");
};

const buyConfirmation = (to, name, code) => {
  const pathname = generatePathName("buyConfirmation");
  const file = fs
    .readFileSync(pathname, { encoding: "utf-8" })
    .toString()
    .replace("${name}", name)
    .replace("${code}", code);
  send("crisrodam1996@gmail.com", file, "Confirmación de compra");
};

export default {
  loginNotification,
  verificationAccount,
  buyConfirmation,
};
