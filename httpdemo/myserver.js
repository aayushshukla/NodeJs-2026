const http = require("http");
/*
   create a web server
   receive request from client 
   send response 
   handle different http method get , post , put , delete 
   create simple rest api 


   Browser  ---> Http Req  ---> Node Js Http Server ----> Http Response  ---> Client 
*/

const port = 8000;
const localhost = "127.0.0.1";
// step 1 create server
const server = http.createServer((req, res) => {
  console.log("hello from server");
  console.log(`User request is coming for  ${req.url} at ${Date.now()}`);
  // Signals that no more data will be written, with one final chunk of data.
  res.write("Hello from the server");
  res.end();
  // res.end("<h1> Helllo  class from server ..........  </h1>"); // sending response.
});

// start server to listen the communication
server.listen(port, localhost, () => {
  console.log(`Server is started at port ${port}  : ${localhost}`);
});
