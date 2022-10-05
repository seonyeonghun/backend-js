const http = require("http");

const app = http.createServer((req, res)=>{
    res.writeHead(200,{"Content-Type":"text/pain"})
    res.write("welcome\n");
    res.end("!!response end!!");
})

