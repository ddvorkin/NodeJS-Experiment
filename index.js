/*var server = require("./server");

server.addRoute("/test",function(params){
    return server.template("index.html");
});

 server.start();*/

var express = require('express');

var app = express();

//required to render static files
app.use(express.static(__dirname + "/static"));

//route / to display index.html
app.get('/',function(req,res){
    res.render('index.html');
});

//run on 127.0.0.1:5000
app.listen(process.env.PORT || 5000);
