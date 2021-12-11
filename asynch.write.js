const { writeFile } = require('fs');

//this is overwiting everything in the app.log file
// writeFile('./data/app.log', '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /Write-file-section" 405 21512',
//     (err) =>{
//         err ? console.log(err) : console.log("file saved");
//     });

writeFile('./data/app.log', '164.3.217.19 - - [21/09/2019:10:07:21 -0500] "Write-file" 405 21513',
    { flag: 'wx'},
    (err) =>{
        err ? console.log(err) : console.log("file saved");
    }
);