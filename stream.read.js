const { createReadStream } = require('fs');

//using a highWaterMark gives you option of setting the number of bytes you want to handle at a time
const stream =  createReadStream('./data/app.log', {
    highWaterMark: 9550,
    encoding: 'utf8'
});

//whenever a stream receives more data it fires a data event
//to tell the event to temporary stop sending the data. we use stream.pause()
stream.on('data', data => {
    stream.pause();
  
    console.log(data);
  //resume function after some time
    setTimeout(() => {
        stream.resume();
    }, 5000);
} );