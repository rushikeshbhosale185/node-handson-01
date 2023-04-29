const http = require("http");
require("dotenv").config();
const { green } = require("console-log-colors");
const response = `<div style="text-align: center; background-color: aquamarine; color: green; padding:100px;"><p style="color: blue;">What is Node JS ?</p> <h1>Node.js is a server-side platform or JavaScript runtime enviourment built on Google Chrome's JavaScript Engine (V8 Engine). <br> Node.js was developed by Ryan Dahl in 2009 and its latest version is v0.10.36. <br> Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. <br> Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.</h1> <h3>Features of Node.js : </h3><h2>Asynchronous and Event Driven</h2><h2>Very Fast</h2><h2>Single Threaded but Highly Scalable</h2><h2>No Buffering & Free License</h2></div>`;
const port = process.env.PORT;
http.createServer((req,res)=>{
    if(req.url == '/login'){
        res.write(response)
        res.end();
    } else if(req.url == '/signup'){
        res.write("<h1>This is a Signup Page...!</h1>");
        res.end();
    }
}).listen(port , ()=>{
    console.warn(green(`Connection established successfully at Port ${port}`));
})