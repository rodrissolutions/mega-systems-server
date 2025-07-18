import { cloudinaryHelpers } from "../../helpers/index.helpers.js";
import { companyServices } from "../../services/index.services.js";

const createCompany = async (req, res) => {
  try {
    const data = req.body;
    const file = req.file;

    const secure_url = await cloudinaryHelpers.uploadFile(
      "company",
      file.buffer,
      file.originalname
    );
    const { code, company, message } = await companyServices.createCompany({
      ...data,
      logo: secure_url,
    });
    res.status(code).json(company ? { message, company } : { message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { createCompany };
