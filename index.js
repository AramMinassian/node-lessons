const minimist = require("minimist");
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");



function createZip(newFolderName) {

  // ------ Getting folder path from argv ------ //
  const argv = minimist(process.argv.slice(2));
  const { folderPath } = argv;
  if (!folderPath) {
    return
  }

  try {
    // ------ Checking if the path exists and readable ------ //
    fs.accessSync(folderPath, fs.constants.F_OK | fs.constants.R_OK);

    // ------ Creating an adjacent folder  ------ //
    const dirPath = path.dirname(folderPath);
    const newFolderPath = path.join(dirPath, newFolderName)
    fs.mkdirSync(newFolderPath);

    // ------ Creating zip files from specified folder and inserting them into the new folder  ------ //
    const files = fs.readdirSync(folderPath);

    files.forEach(file => {
      const filePath = path.join(folderPath, file);

      const readFileStream = fs.createReadStream(filePath);
      const writeFileStream = fs.createWriteStream(path.join(newFolderPath, file + ".gz"))

      const gzip = zlib.createGzip();

      readFileStream
        .pipe(gzip)
        .pipe(writeFileStream);

    })
  } catch (error) {
    console.log(error.message);
  }

}

// ------ New folder name is provided via function argument. Random name genarator package can also be used here  ------ //
createZip("random-folder2");
