
// -------------- Local user data storage -------------- // 

let users = [];


// -------------- Middlewares -------------- // 


// getting all users
export function getUsers(req, res) {
  res.send(users);
}

// getting a user with its id
export function getUser(req, res) {
  const user = users.find(user => user.id === req.params.id)
  res.send(user);
}

//creating a new user
export function createUser(req, res) {
  const { body } = req;
  const newUser = {id: idGenerator(), ...body};
  users.push(newUser);
  res.status(201).json(newUser);
}

//updating a user
export function updateUser(req, res){
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
export function deleteUser(req, res){
  users = users.filter(user => user.id !== req.params.id)
  res.json({ success: true });
}

// checking if the user with the specified id exists
export function checkUser(req, res, next){
  const userExists = users.some(user => user.id === req.params.id);
  if(!userExists){
    return res.status(404).json({
      message:`User with the specified id does not exist`  
    });
  }
  next();
}

// a simple body validation for POST and PUT requests
export function validateBody(req, res, next) {
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

// -------------- Simple id generator -------------- // 

function idGenerator() {
  return Math.random().toString(32).slice(2) + "-" + Math.random().toString(32).slice(2)
}
