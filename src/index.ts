import http from "http";
import fs from "fs";
import path from "path";

const PORT = 3000;

const server = http.createServer((req, res) => {
  const filePath = path.join(process.cwd(), "public", "index.html");
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Error loading game");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Mega IO Survival running at http://localhost:${PORT}`);
});
