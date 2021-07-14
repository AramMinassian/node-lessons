const { EventEmitter } = require("events");

const logger = new EventEmitter();

logger.on("message", msg => {
  console.log(`New message ${msg}`);
  msgs.push(msg);
})

logger.on("login", name => {
  console.log(`New user ${name}`)
  users.push(name);
})

logger.on("getUsers", () => {
  console.log("Logged users: ")
  users.forEach(user => {
    console.log(user);
  })
})

logger.on("getMessages", () => {
  console.log("Messages:")
  msgs.forEach(msg => {
    console.log(msg);
  })
})

let users = [];
let msgs = [];


let argv = require("minimist")(process.argv.slice(2));

argv.addUser && logger.emit('login', argv.addUser);
argv.addUser && argv.message && logger.emit('message', argv.message);

logger.emit("getUsers");
logger.emit("getMessages");





















