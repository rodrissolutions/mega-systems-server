import { voucherServices } from "../../services/index.services.js";

const deleteVoucher = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message } = await voucherServices.deleteVoucher(id);
    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { deleteVoucher };
