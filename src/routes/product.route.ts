import express from "express";
import productController from "../controllers/product.controller";

const productRoute = express.Router();

productRoute.get("/", productController.getProducts);
productRoute.get("/:id", productController.getProduct);
productRoute.post("/", productController.create);
productRoute.put("/:id", productController.updateProduct);
productRoute.delete("/:id", productController.deleteProduct);

export default productRoute;