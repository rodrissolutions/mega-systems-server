import { Router } from "express";
import { favoriteControllers } from "../../controllers/index.controllers.js";
import { jwtMiddlewares } from "../../middlewares/index.middlewares.js";

const favoriteRouter = Router();

favoriteRouter.post("/", favoriteControllers.addFavorite);
favoriteRouter.get("/user/:id", favoriteControllers.listByUser);

favoriteRouter.delete("/", favoriteControllers.deleteFavorite);

favoriteRouter.delete("/all/user/:id", favoriteControllers.deleteAllFavorites);

favoriteRouter.get(
  "/",
  jwtMiddlewares.validateJWT,
  jwtMiddlewares.isAdmin,
  favoriteControllers.getAll
);

export default favoriteRouter;
