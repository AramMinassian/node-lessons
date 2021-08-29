import express from "express";
import costumerController from "../controllers/costumer.controller";
import costumerValidator from "../middlewares/costumerValidator.middleware";

const costumerRoute = express.Router();

costumerRoute.get("/", costumerController.getCostumers);
costumerRoute.get("/:id", costumerController.getCostumer);
costumerRoute.post("/", costumerValidator, costumerController.create);
costumerRoute.put("/:id", costumerValidator, costumerController.updateCostumer);
costumerRoute.delete("/:id", costumerController.deleteCostumer);

export default costumerRoute;