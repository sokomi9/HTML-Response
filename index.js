const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-type": "text/html"});
    fs.createReadStream("./main.html").pipe(res);
    //const html = fs.readFileSync("./main.html", "utf-8")
    //res.end(html);
})
server.listen(3000,()=>{
    console.log("Server running on port 3000");
})