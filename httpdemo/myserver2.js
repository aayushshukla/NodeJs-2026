const http = require("http");
const url = require("url");
const os = require("os");
let port = 8000;
let host = "localhost";

//create server
const server = http.createServer((req, res) => {
  const reqUrl = req.url;
  console.log(reqUrl);
  let pareseUrl = url.parse(req.url, true); //  method takes a URL string, parses it, and returns a URL object.
  //   console.log(pareseUrl.hostname);
  //   console.log("Path name" + pareseUrl.pathname);
  //   console.log("Query string", pareseUrl.query);
  //   let queryParam1 = pareseUrl.query.username;
  //   let queryParam2 = pareseUrl.query.password;
  //   console.log(`Username is ${queryParam1} and password is ${queryParam2}`);
  let pathname = pareseUrl.pathname; // get pathname from the url by using parsing
  let query = pareseUrl.query; // getting query object
  if (pathname === "/favicon.ico") return res.end();
  switch (pathname) {
    case "/":
      res.end(`Welcome to My Website ${query.username}`);
      break;

    case "/contact":
      res.end("Contact us email : aayush@gmail.com \n Mob No : 123456789");
      break;

    case "/about":
      res.end(
        "This AI tool help you to filter original source from the fake ones",
      );
      break;

    default:
      // writing response header
      // setting status code 404
      // and setting autor ,os in response header
      res.writeHead(404, {
        "Content-type": "text/html",
        os: os.platform,
        author: "aayush",
      });
      res.end("<h1> 404 Page Not Found </h1>");
  }
});

// start listening on server
server.listen(port, host, () => {
  console.log(`Server is started at ${port} ${host}`);
});
