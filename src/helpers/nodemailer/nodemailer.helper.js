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
  send(to, file, "Confirmación de compra");
};

const recoveryPassword = (to, name, code) => {
  const pathname = generatePathName("recovery");
  const file = fs
    .readFileSync(pathname, { encoding: "utf-8" })
    .toString()
    .replace("${name}", name)
    .replace("${code}", code);
  send(to, file, "Recuperación de contraseña");
};

const passwordChangeNotification = (to, name) => {
  const pathname = generatePathName("password-change-notification");
  const file = fs
    .readFileSync(pathname, { encoding: "utf-8" })
    .toString()
    .replace("${name}", name);
  send(to, file, "Cambio de contraseña detectado");
};

const rejectVoucher = (to, name, observation) => {
  const pathname = generatePathName("rejectVoucher");
  const file = fs
    .readFileSync(pathname, { encoding: "utf-8" })
    .toString()
    .replace("${name}", name)
    .replace("${observation}", observation);
  send(to, file, "Comprobante de pago rechazado");
};

const acceptVoucher = (to, name) => {
  const pathname = generatePathName("acceptVoucher");
  const file = fs
    .readFileSync(pathname, { encoding: "utf-8" })
    .toString()
    .replace("${name}", name);
  send(to, file, "Comprobante de pago aceptado");
};

const sendBuyInvoice = (to, cliente, total) => {
  const pathname = generatePathName("buyInvoce");
  const file = fs.readFileSync(pathname, { encoding: "utf-8" }).toString();
  const now = new Date();
  const dateFormatted = now.toLocaleString("es-EC", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const html = file
    .replace("${cliente}", cliente)
    .replace("${total}", total)
    .replace("${date}", dateFormatted);

  send(to, html, "Confirmación de compra");
};

const sendBuyInvoiceTrans = (to, cliente, total, account) => {
  const pathname = generatePathName("buyInvoceTrans");
  const file = fs.readFileSync(pathname, { encoding: "utf-8" }).toString();
  const now = new Date();
  const dateFormatted = now.toLocaleString("es-EC", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const html = file
    .replace("${cliente}", cliente)
    .replace("${total}", total)
    .replace("${date}", dateFormatted)
    .replace("${banco}", account.bankName)
    .replace("${cuenta}", account.accountNumber)
    .replace("${titular}", account.accountHolder);

  send(to, html, "Confirmación de compra");
};

export default {
  loginNotification,
  verificationAccount,
  buyConfirmation,
  recoveryPassword,
  passwordChangeNotification,
  rejectVoucher,
  acceptVoucher,
  sendBuyInvoice,
  sendBuyInvoiceTrans,
};
