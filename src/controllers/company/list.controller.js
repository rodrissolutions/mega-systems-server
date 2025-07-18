import { companyServices } from "../../services/index.services.js";

const getInfoCompany = async (req, res) => {
  try {
    const { code, company } = await companyServices.getInfoCompany();
    res.status(code).json({ company });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { getInfoCompany };
