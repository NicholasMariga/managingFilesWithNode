const { openSync, readdirSync, writeSync, watch, closeSync } = require("fs");
const camelCase = require("camelcase");

//watching a file
watch("./read", () => {
  //open file for writing
  const indexFd = openSync("./index.js", "w");

  //get the list of the files
  const files = readdirSync("./read");

  //iterates through the files
  files.map((f) => {
    const name = f.replace("js", "");
    console.log(`Adding a file: ${f}`);

    //writes a new line for each file
    writeSync(
      indexFd,
      `module.exports.${camelCase(name)} = require('./read/${name}').read;\n`
    );
  });

  //closes the file
  closeSync(indexFd);
});
