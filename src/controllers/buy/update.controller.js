import nodemailerHelper from "../../helpers/nodemailer/nodemailer.helper.js";
import { User } from "../../lib/database.js";
import { buyServices } from "../../services/index.services.js";

const updateSale = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const { code, message, UserId } = await buyServices.updateSale(id, data);
    if (code === 200 && UserId) {
      const user = await User.findOne({
        where: {
          id: UserId,
        },
      });
      const { email, fullName } = user;
      if (data.status === "Rechazada" && data.observations) {
        nodemailerHelper.rejectVoucher(email, fullName, data.observations);
      }
    }
    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

const confirmPayment = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message, UserId } = await buyServices.confirmPayment(id);
    if (code === 200) {
      const user = await User.findOne({
        where: {
          id: UserId,
        },
      });

      const { email, fullName } = user;
      nodemailerHelper.acceptVoucher(email, fullName);
    }
    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { updateSale, confirmPayment };
