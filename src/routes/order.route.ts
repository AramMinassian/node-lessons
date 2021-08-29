import express from "express";
import orderController from "../controllers/order.controller";
import orderValidator from "../middlewares/orderValidator.middleware";

const orderRoute = express.Router();

orderRoute.get("/", orderController.getOrders);
orderRoute.get("/:id", orderController.getOrder);
orderRoute.post("/", orderValidator, orderController.create);
orderRoute.put("/:id", orderValidator, orderController.updateOrder);
orderRoute.delete("/:id", orderController.deleteOrder);

export default orderRoute;