const http = require("http");

const server = http.createServer((req, res) => {
  //http://localhost:3000/
  console.log(req.url, req.method);
  
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  res.end("Hola Server Node.js");
});

server.listen(3000, () => console.log(`http://localhost:3000`));
