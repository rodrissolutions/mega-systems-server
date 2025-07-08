import { Router } from "express";
import { userControllers } from "../../controllers/index.controllers.js";
import { jwtMiddlewares } from "../../middlewares/index.middlewares.js";
import { multerHelpers } from "../../helpers/index.helpers.js";

const userRouter = Router();

userRouter.post(
  "/",
  multerHelpers.upload.single("profilePicture"),
  userControllers.createUser
);
userRouter.get(
  "/all",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  userControllers.getAll
);
userRouter.get("/user/:id", userControllers.getUserById);

userRouter.patch(
  "/update/withImage/:id",
  multerHelpers.upload.single("profilePicture"),
  userControllers.updateUserWithImage
);

userRouter.patch(
  "/update/withoutImage/:id",
  userControllers.updateUserWithoutImage
);

export default userRouter;
