const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server is getting a request");
  if (req.method === "GET" && req.url === "/") {
    res.write("<h1>Hello World</h1>");
    res.end();
  } else if (req.method === "GET" && req.url === "/about") {
    res.end("<h1> This is about page</h1> <a href='/'> Home</a>");
  } else if (req.method === "GET" && req.url === "/contact") {
    res.end("<h1> This is contact page</h1> <a href='/'> Home</a>");
  } else if (req.method === "GET" && req.url === "/login") {
    res.end("<h1> This is Login page</h1> <a href='/'> Home</a>");
  }
});

server.listen(4000, "localhost", () => {
  console.log("Server is listening to port number 4000");
});
