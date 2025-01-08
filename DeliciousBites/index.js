import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === "/") {
    let data = fs.readFileSync("./pages/index.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  } else if (url === "/about") {
    let data = fs.readFileSync("./pages/About.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  } else if (url === "/contact") {
    let data = fs.readFileSync("./pages/Contact.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  } else if (url === "/signup") {
    let data = fs.readFileSync("./pages/Signup.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  } else if (url === "/style.css") {
    let data = fs.readFileSync("./pages/style.css");
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(data);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(2000, "localhost", () => {
  console.log("Server is listening on port 2000");
});
