const { convertCsv } = require("../csv.parse");
//readFile function from fs API to load entire file
const { readFile } = require("fs");

module.exports.read = () => {
  //reading a file with callback
  readFile("./data/pulitzer-circulation-data.csv", "utf8", (err, data) => {
    if (err) {
      console.log(`There was a problem with the file ${err}`);
      return;
    }
    //console.log(data);
    const values = convertCsv(data);
    console.table(values);
  });
};
