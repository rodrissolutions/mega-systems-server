import { cloudinaryHelpers } from "../../helpers/index.helpers.js";
import { voucherServices } from "../../services/index.services.js";

const saveVoucher = async (req, res) => {
  try {
    const data = req.body;
    const file = req.file;

    const secure_url = await cloudinaryHelpers.uploadFile(
      "vouchers",
      file.buffer,
      file.originalname
    );

    const { code, message, voucher } = await voucherServices.saveVoucher({
      ...data,
      photo: secure_url,
    });

    res.status(code).json(voucher ? { message, voucher } : { message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { saveVoucher };
