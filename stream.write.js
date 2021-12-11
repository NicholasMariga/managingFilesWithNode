const { createReadStream, createWriteStream } = require('fs');
const { fileURLToPath } = require('url');

//using a highWaterMark gives you option of setting the number of bytes you want to handle at a time
const stream =  createReadStream('./data/app.log', {
    highWaterMark: 9550,
    encoding: 'utf8'
});

const writer = createWriteStream('./data/output.log');


//whenever a stream receives more data it fires a data event
//to tell the event to temporary stop sending the data. we use stream.pause()

let i = 0;
stream.on('data', data => {
    stream.pause();
  
    console.log(++i);

    writer.write(data);
  //resume function after some time
    setTimeout(() => {
        stream.resume();
    }, 1000);
} );

//to handle mismatched stream as result of large file, we use pipe