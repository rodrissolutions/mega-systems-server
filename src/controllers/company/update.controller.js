import { companyServices } from "../../services/index.services.js";

const updateWithImage = async (req, res) => {
  try {
    const data = req.body;
    const file = req.file;
    const { id } = req.params;
    const secure_url = await cloudinaryHelpers.uploadFile(
      "company",
      file.buffer,
      file.originalname
    );
    const { code, company, message } = await companyServices.updateCompany(
      {
        ...data,
        logo: secure_url,
      },
      id
    );
    res.status(code).json(company ? { message, company } : { message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const updateWithoutImage = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;

    const { code, message } = await companyServices.updateCompany(data, id);

    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { updateWithImage, updateWithoutImage };
