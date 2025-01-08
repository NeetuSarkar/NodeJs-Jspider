import http from "http";
import { url } from "inspector";
import fs from "fs";

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (method === "GET") {
    if (url === "/") {
      // res.write("<h1>Home Page</h1>");
      let data = fs.readFileSync("./pages/index.html");
      res.end(data);
    } else if (url === "/about") {
      // res.write("<h1><marquee>WELCOME TO ABOUT PAGE</marquee></h1>");
      let data = fs.readFileSync("./pages/about.html");
      res.end(data);
    } else if (url === "/css/index.css") {
      let data = fs.readFileSync("./css/index.css");
      res.end(data);
    } else if (url === "/velo.jpg") {
      let data = fs.readFileSync("./pages/velo.jpg");
      res.end(data);
    } else {
      // res.writeHead(404);
      let data = fs.readFileSync("./pages/login.html");
      res.end(data);
    }
  }
});

server.listen(2000, "localhost", () => {
  console.log("Server listening to 2000");
});
