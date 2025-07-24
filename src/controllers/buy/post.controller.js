import nodemailerHelper from "../../helpers/nodemailer/nodemailer.helper.js";
import { BankAccount, User } from "../../lib/database.js";
import { buyServices } from "../../services/index.services.js";

const saleWithDelivery = async (req, res) => {
  try {
    const { code, message } = await buyServices.saleWithDelivery(req.body);

    if (code === 200) {
      const { UserId } = req.body;
      const bankAccount = await BankAccount.findOne({
        where: {
          accountHolder: "Lucas Cedeño",
        },
      });
      const user = await User.findOne({
        where: {
          id: UserId,
        },
      });
      const { email, fullName } = user;

      if (req.body.paymentMethod === "Efectivo") {
        nodemailerHelper.sendBuyInvoice(email, fullName, req.body.total);
      } else {
        nodemailerHelper.sendBuyInvoiceTrans(
          email,
          fullName,
          req.body.total,
          bankAccount
        );
      }
    }

    res.status(code).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const saleWithoutDelivery = async (req, res) => {
  try {
    const { code, message } = await buyServices.saleWithoutDelivery(req.body);
    if (code === 200) {
      const { UserId } = req.body;
      const bankAccount = await BankAccount.findOne({
        where: {
          accountHolder: "Lucas Cedeño",
        },
      });
      const user = await User.findOne({
        where: {
          id: UserId,
        },
      });
      const { email, fullName } = user;
      if (req.body.paymentMethod === "Efectivo") {
        nodemailerHelper.sendBuyInvoice(email, fullName, req.body.total);
      } else {
        nodemailerHelper.sendBuyInvoiceTrans(
          email,
          fullName,
          req.body.total,
          bankAccount
        );
      }
    }
    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { saleWithDelivery, saleWithoutDelivery };
