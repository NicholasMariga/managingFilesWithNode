const { constants, writeFile } = require("fs");

writeFile(
  "./data/newapp.log",
  '164.3.217.19 - - [21/09/2019:10:07:21 -0500] "Write-file" 405 21513',
  { mode: constants.S_IWUSR | constants.S_IRUSR },
  (err) => {
    err ? console.log(err) : console.log("file saved");
  }
);
