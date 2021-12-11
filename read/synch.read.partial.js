const fs = require("fs");

module.exports.read = () => {
  //read a file synchronously, which it returns a file descriptor
  const fd = fs.openSync("./data/app.log");

  let count = 0;
  do {
    //initialize the buffer to store the data
    const buffer = Buffer.alloc(200);
    //parsing the file descriptor to the readsync
    //using null, makes the node to look where it was last and pick from there
    count = fs.readSync(fd, buffer, 0, buffer.length, null);
    console.log(buffer.toString());
  } while (count > 0);
};
