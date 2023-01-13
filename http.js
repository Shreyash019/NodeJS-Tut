const http = require('http');
const fs = require('fs');

// // (1) Sending Normal text as response
// const server = http.createServer((request, response)=>{
//     response.writeHead(200, {'Content-Type': 'text/html'})
//     response.write('Hello');
//     response.end();
// })

// // (2) Sending array
// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {'content-type': 'text/json'});
//     const arr = [1,2,3,4]
//     console.log(arr)
//     res.end(arr.toString());
// })

// // (3) Sending JSON object as response
// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {'content-type': 'text/json'});
//     const jsonObj = JSON.stringify({
//         'msg': 'Hello world',
//         'from': 'JSON Type Response'
//     })
//     res.end(jsonObj);
// })

// // (4) Sending HTML element as response
// const server = http.createServer((req, res)=>{
//     res.writeHead(200, { 'content-type': 'text/html'})
//     res.write('<h1>Hello world')
//     res.end()
// });

// // (5) Sending HTML page as response
// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     const body = `<!DOCTYPE html>
//                  <html>
//                     <head>
//                         <meta charset = 'utf-8'>
//                         <title>HTML Page response</title>
//                     </head>
//                     <body>
//                         <h1>This is html page response</h1>
//                     </body>
//                  </html>
//                  `
//     res.end(body)
// })

// // (6) Sending response as per differnt url request
// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     console.log(req.url)
//     if(req.url === '/'){
//         res.write('Welcome to Home page.')
//         res.end()
//     } else if(req.url === '/about'){
//         res.write('Welcome to about page.')
//         res.end()
//     } else {
//         res.write('OOPs wrong URL request...')
//         res.end()
//     }
// });


// (7) Sending File Content in response
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/json'});
    const readFile = fs.readFile('./TestFiles/copyFileAsync.txt', (err, data)=>{
        if(err) console.log(err);
        return data;
    });
    console.log(readFile)
    res.end(readFile);
})


// (8) Sending response by creating stream pipe
// const server = http.createServer((req, res)=>{
//     const readableStream = fs.createReadStream('./TestFiles/openFile.txt');
//     readableStream.pipe(res);
// })


const port = 5000;
server.listen(port, (err)=>{
    console.log(`Listening at port:: ${port}`)
})