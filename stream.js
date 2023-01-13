const http = require('http');
const fs = require('fs');

///<<< Readable stream >>>///

// (Method 1) Readable stream and printing data as buffer

// var readerStream = fs.createReadStream('./TestFiles/openFile.txt');
// readerStream.on('data', (data)=>{
//     console.log(data)
// })



// (Method 2) Readable stream and printing data as string

// var readerStream = fs.createReadStream('./TestFiles/openFile.txt');
// // Set the encoding to be utf8. 
// readerStream.setEncoding('UTF8');
// readerStream.on('data', (data)=> {
//    console.log(data);
// });


// (Method 3) Readable stream using chunk and printing data as string buffer

// var readerStream = fs.createReadStream('./TestFiles/openFile.txt');
// let data = ''
// // Set the encoding to be utf8. 
// readerStream.setEncoding('UTF8');
// // Handle stream events --> data, end, and error
// readerStream.on('data', function(chunk) {
//     data += chunk;
//  });
// readerStream.on('end', ()=>{
//     console.log(data)
// });



// (Method 4) Creating readable stream using server

// const server = http.createServer((req, res)=>{
//     const readableStream = fs.createReadStream('./TestFiles/openFile.txt');
//     readableStream.pipe(res);
// })
// server.listen(3000, (err)=>{
//     if(err) console.log(err);
//     else console.log('Server runnu=ing at port:: 3000')
// })


///<<< Writable stream >>>///

// (Method 1) Creating Writable stream using particular message
// const msgToWrite = 'This sentance will be used to create writable stream.'
// const writeStream = fs.createWriteStream('./TestFiles/writeStream.txt');
// writeStream.write(msgToWrite);

// (Method 2) Creating Writable stream using readable stream
const writableStream = fs.createWriteStream('./TestFiles/writeStream.txt');
const readToWrite = fs.createReadStream('./TestFiles/openFile.txt');
let data = ''
readToWrite.on('data', (chunk)=>{
    data += chunk
    writableStream.write(chunk)
})
writableStream.write(data)


