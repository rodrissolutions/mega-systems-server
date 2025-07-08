import { residencyServices } from "../../services/index.services.js";

const updateResidency = async (req, res) => {
  try {
    const data = req.body;
    const { code, message } = await residencyServices.updateResidency(data);

    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { updateResidency };
