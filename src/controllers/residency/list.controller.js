import { residencyServices } from "../../services/index.services.js";

const getByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, residency, message } = await residencyServices.getByUser(id);
    res.status(code).json(residency ? { residency } : { message });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

export { getByUser };
