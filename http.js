const http = require('http');

// // (1) Simple Text Response
// const server = http.createServer((request, response)=>{
//     response.writeHead(200, {'Content-Type': 'text/html'})
//     response.write('Hello');
//     response.end();
// })

// // (2) JSON object response Response
// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {'content-type': 'text/json'});
//     const jsonObj = JSON.stringify({
//         'msg': 'Hello world',
//         'from': 'JSON Type Response'
//     })
//     res.end(jsonObj);
// })

// // (3) HTML element Response
// const server = http.createServer((req, res)=>{
//     res.writeHead(200, { 'content-type': 'text/html'})
//     res.write('<h1>Hello world')
//     res.end()
// });

// // (4) HTML page Response
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

// (5) Response to different URLs
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log(req.url)
    if(req.url === '/'){
        res.write('Welcome to Home page.')
        res.end()
    } else if(req.url === '/about'){
        res.write('Welcome to about page.')
        res.end()
    } else {
        res.write('OOPs wrong URL request...')
        res.end()
    }
})



const port = 5000;
server.listen(port, (err)=>{
    console.log(`Listening at port:: ${port}`)
})