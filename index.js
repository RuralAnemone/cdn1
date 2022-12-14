// const express = require('express');
// const path = require('path');
// const app = express();
// const port = process.env['PORT'] || 42069;
// const serveIndex = require('serve-index');
// app.use('/', serveIndex('./'));
// app.use('/', express.static('./'));
// app.listen(port,_=>console.log('🤓'));

const express=require("express"),path=require("path"),app=express(),port=process.env.PORT||42069,serveIndex=require("serve-index");app.use("/",serveIndex("./")),app.use("/",express.static("./")),app.listen(port,e=>console.log("\uD83E\uDD13"));
