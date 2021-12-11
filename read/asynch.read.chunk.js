const fs = require("fs");

module.exports.read = () => {
  //first we get the total size of the file
  let totalSize = 0;
  fs.stat("./data/app.log", (error, { size }) => (totalSize = size));

  //then open the file
  fs.open("./data/app.log", (err, fd) => {
    const buffer = Buffer.alloc(200);

    //a loop to loop through
    for (let i = 0; i <= totalSize / buffer.length; i++) {
      fs.read(
        fd,
        buffer,
        0,
        buffer.length,
        i * buffer.length,
        (err, count, buff) => {
          console.log(buff.toString());
          //the issue with this it fails to read ecerything so no accountability of ecerything
        }
      );
    }
  });
};
