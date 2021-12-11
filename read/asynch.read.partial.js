const { convertCsv } = require("../csv.parse");

const { open, read } = require("fs");

module.exports.read = () => {
  open("./data/pulitzer-circulation-data.csv", (err, fd) => {
    const buffer = Buffer.alloc(200);

    //what file to read from fd
    //where to store the data
    //where in our buffer to start storing the data
    //how much to read
    //where to start reading the file

    //count - number of bytes read
    //buff - data read

    read(fd, buffer, 0, buffer.length, 0, (err, count, buff) => {
      console.table(convertCsv(buff.toString()));
    });
  });
};
