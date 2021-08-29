import "reflect-metadata";
import express, {Express} from "express";
import cors from "cors";
import costumerRoute from "./routes/costumer.route";
import orderRoute from "./routes/order.route";
import productRoute from "./routes/product.route";


const getApp = ():Express => {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use("/costumers", costumerRoute);
    app.use("/orders", orderRoute);
    app.use("/products", productRoute);
    
    return app;
}

export default getApp;
