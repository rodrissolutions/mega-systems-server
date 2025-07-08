import { cloudinaryHelpers } from "../../helpers/index.helpers.js";
import { voucherServices } from "../../services/index.services.js";

const updateVoucher = async (req, res) => {
  try {
    const file = req.file;
    const { id } = req.params;
    const secure_url = await cloudinaryHelpers.uploadFile(
      "vouchers",
      file.buffer,
      file.originalname
    );
    const { code, message } = await voucherServices.updateVoucher(id, {
      photo: secure_url,
    });
    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { updateVoucher };
