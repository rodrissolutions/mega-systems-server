import { deleteBankAccount } from "./delete.controller.js";
import { getAll, getAllActives } from "./list.controller.js";
import { createBankAccount } from "./post.controller.js";
import { updateBankAccount } from "./update.controller.js";

export default {
  createBankAccount,
  deleteBankAccount,
  updateBankAccount,
  getAll,
  getAllActives,
};
