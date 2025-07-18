import { Company, User } from "../../lib/database.js";

const getInfoCompany = async () => {
  const company = await Company.findOne({});
  return { code: 200, company };
};

export { getInfoCompany };
