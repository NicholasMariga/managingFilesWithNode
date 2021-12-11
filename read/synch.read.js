const { convertCsv } = require("../csv.parse");
//readFileSync function from fs API to load entire file
const { readFileSync } = require("fs");

module.exports.read = () => {
  try {
    //reading a file synchronously, no callback
    const data = readFileSync("./data/pulitzer-circulation-data.csv", "utf8");

    const values = convertCsv(data);
    console.table(values);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
