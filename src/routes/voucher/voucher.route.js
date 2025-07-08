import { Router } from "express";
import { multerHelpers } from "../../helpers/index.helpers.js";
import { voucherControllers } from "../../controllers/index.controllers.js";

const voucherRouter = Router();

voucherRouter.post(
  "/buy",
  multerHelpers.upload.single("photo"),
  voucherControllers.saveVoucher
);

voucherRouter.put(
  "/update/:id",
  multerHelpers.upload.single("photo"),
  voucherControllers.updateVoucher
);

voucherRouter.delete("/delete/:id", voucherControllers.deleteVoucher);

export default voucherRouter;
