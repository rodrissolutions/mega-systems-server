import { Router } from "express";
import { bankAccountControllers } from "../../controllers/index.controllers.js";
import { jwtMiddlewares } from "../../middlewares/index.middlewares.js";

const bankAccountRouter = Router();

bankAccountRouter.post(
  "/",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  bankAccountControllers.createBankAccount
);

bankAccountRouter.get(
  "/",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  bankAccountControllers.getAll
);

bankAccountRouter.get(
  "/actives",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  bankAccountControllers.getAllActives
);

bankAccountRouter.delete(
  "/:id",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  bankAccountControllers.deleteBankAccount
);

bankAccountRouter.patch(
  "/:id",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  bankAccountControllers.updateBankAccount
);

export default bankAccountRouter;
