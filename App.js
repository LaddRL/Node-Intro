const http = require("http");
const PORT = 5000 // || "some URL"

http.createServer((req, res)=>{
    res.writeHead(200, {"content-type": "text/html"});
    res.write("Hi! Hopefully it works")
    res.end();
})

.listen(PORT,()=>{
    console.log(`server is listening at local host ${PORT} port`)
})