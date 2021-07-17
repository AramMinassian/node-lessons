const fs = require("fs");
const path = require("path");
const util = require("util");


function getDirStructure(dirPath) {
  let prevDirPath = dirPath;
  let files = fs.readdirSync(dirPath);

  for (let i in files) {

    dirPath = path.join(dirPath, files[i]);

    if (fs.statSync(dirPath).isDirectory()) {
      files[i] = {
        [files[i]]: getDirStructure(dirPath)
      }
    }
    dirPath = prevDirPath;
  }
  return files;
}

console.log(util.inspect(getDirStructure("../node_modules"), { depth: null }));