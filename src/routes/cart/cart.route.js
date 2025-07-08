import { Router } from "express";
import { cartControllers } from "../../controllers/index.controllers.js";

const cartRouter = Router();

cartRouter.get("/user/:id", cartControllers.getByUser);
cartRouter.post("/", cartControllers.addToCart);
cartRouter.put("/increment", cartControllers.incrementItem);
cartRouter.put("/decrement", cartControllers.decrementItem);
cartRouter.put("/increment/withoutItemId", cartControllers.updateItemWithoutId);
cartRouter.put(
  "/decrement/withoutItemId",
  cartControllers.decrementItemWithoutId
);
cartRouter.delete("/deleteItem", cartControllers.removeItem);
export default cartRouter;
