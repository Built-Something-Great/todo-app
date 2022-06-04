const app = require('express');
const http = require('http');
const server = http.createServer(app);
const port = process.env.port || 5000


server.listen(port, (req,res)=>{
    console.log("server connected to port: "+port)
})