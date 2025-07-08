import { Router } from "express";
import { codeControllers } from "../../controllers/index.controllers.js";

const codeRouter = Router();
codeRouter.post("/", codeControllers.createCode);
codeRouter.get("/codeBy", codeControllers.getCode);
codeRouter.put("/validateAccount", codeControllers.validateAccount);
codeRouter.put("/resendCode", codeControllers.updateCode);

codeRouter.put("/verificateBuyCode/:id", codeControllers.validateBuyCode);

codeRouter.post(
  "/generateNewVerificationAccountCode",
  codeControllers.generateNewVerificationAccountCode
);

// codeRouter.post('/createCode/buy', codeControllers.createCode)

export default codeRouter;
