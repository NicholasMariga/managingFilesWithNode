//There are two ways of appending a file
    //First, we can do it by adding a flag as an object in the writeFile function
// const { writeFile } = require('fs');

// writeFile('./data/app.log', '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /Write-file-section" 405 21512',
//     { flag: 'a'}, 
//     (err) =>{
//         err ? console.log(err) : console.log("file saved");
//     }
// );

    //second, using the appendFile function from fs and remove the flag object
const { appendFile } = require('fs');

appendFile('./data/app.log', '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /Write-file-section" 405 21512',
    (err) =>{
        err ? console.log(err) : console.log("file saved");
    }
);