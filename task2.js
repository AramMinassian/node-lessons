const fs = require("fs");
const path = require("path");


const inputPath = path.join("addresses", "addresses.csv");
const outputPath = path.join("addresses", "addresses.json");

try {
  const fileData = fs.readFileSync(inputPath, { encoding: "utf8" });
  fs.writeFileSync(outputPath, fileData);
} catch(err){
  console.log(err.message);
}