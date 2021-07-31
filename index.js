const express = require("express");


// -------------- Local user data storage -------------- // 

let users = [];

// -------------- Server implementation -------------- // 

const app = express();
const port = 3000;
app.use(express.json());


app.get("/users", getUsers)

app.get("/users/:id", checkUser, getUser)

app.post("/users", validateBody, createUser)

app.delete("/users/:id", checkUser, deleteUser)

app.put("/users/:id", checkUser, validateBody, updateUser)


app.listen(port, () => {
  console.log(`app is listening on port: ${port}`)
});


// -------------- Simple id generator -------------- // 

function idGenerator() {
  return Math.random().toString(32).slice(2) + "-" + Math.random().toString(32).slice(2)
}

// -------------- Middlewares -------------- // 


// getting all users
function getUsers(req, res) {
  res.send(users);
}

// getting a user with its id
function getUser(req, res) {
  const user = users.find(user => user.id === req.params.id)
  res.send(user);
}

//creating a new user
function createUser(req, res) {
  const { body } = req;
  const newUser = {id: idGenerator(), ...body};
  users.push(newUser);
  res.status(201).json(newUser);
}

//updating a user
function updateUser(req, res){
  const { body } = req;
  const id = req.params.id;
  const updatedUser = { id, ...body};
  users = users.map(user => {
    if (user.id === updatedUser.id) return updatedUser;
    return user;
  });
  res.json(updatedUser);
}

//deleting a user
function deleteUser(req, res){
  users = users.filter(user => user.id !== req.params.id)
  res.json({ success: true });
}

// checking if the user with the specified id exists
function checkUser(req, res, next){
  const userExists = users.some(user => user.id === req.params.id);
  if(!userExists){
    return res.status(404).json({
      message:`User with the specified id does not exist`  
    });
  }
  next();
}

// a simple body validation for POST and PUT requests
function validateBody(req, res, next) {
  const { body } = req;
  if (!body.age) {
    return res.status(400).json({message: "Bad request: body must have age field"});
  }
  else if (!body.name) {
    return res.status(400).json({message: "Bad request: body must have name field"});
  }
  else if (!body.gender) {
    return res.status(400).json({message: "Bad request: body must have gender field"});
  }
  else if (!body.email) {
    return res.status(400).json({message: "Bad request: body must have email field"});
  }
  next();
}

