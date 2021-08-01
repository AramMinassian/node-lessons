import express from "express";
import {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  checkUser,
  validateBody
} from "./controllers.js";


const app = express();


app.use(express.json());

app.route("/users")
  .get(getUsers)
  .post(validateBody, createUser)

app.route("/users/:id")
  .get(checkUser, getUser)
  .delete(checkUser, deleteUser)
  .put(checkUser, validateBody, updateUser)


export default app







