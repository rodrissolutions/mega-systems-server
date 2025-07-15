import { deleteBankAccount } from "./delete.service.js";
import { getAll, getAllActives } from "./list.service.js";
import { createBankAccount } from "./post.service.js";
import { updateBankAccount } from "./update.service.js";

export default {
  getAll,
  getAllActives,
  createBankAccount,
  updateBankAccount,
  deleteBankAccount,
};
