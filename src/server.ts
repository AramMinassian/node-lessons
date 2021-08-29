import { createConnection } from "typeorm";
import getApp from "./app";


const server = async () => {
  
  try {
    const connection = await createConnection();
    console.log("Database connection has been successfully established");

    const app = getApp();
    app.listen(3000, () => {
      console.log("App is listening on port 3000");
    })
  } catch (err){
    console.log(err); 
  }
}

export default server();
