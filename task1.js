const readline = require('readline');
const fs = require("fs");
const path = require("path");



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please, specify the file path you want node to read? ', (answer) => {
  const normalizedPath = path.normalize(answer);
  try {
    const data = fs.readFileSync(`${normalizedPath}`, "utf8");
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
  rl.close();
});