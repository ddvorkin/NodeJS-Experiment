var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//required to render static files
app.use(express.static(__dirname + "/static"));

//route / to display index.html
app.get('/',function(req,res){
    res.render("index.html");
});

io.on('connection', function(socket){
    console.log('A user connected');
    socket.on('msg', function(msg){
        io.emit("msg", msg);
        console.log('message: ' + msg);
    });
    socket.on('disconnect', function(){
        console.log('User disconnected');
    });
});

//run on 127.0.0.1:5000
http.listen(5000, function(){
    console.log("Server started on port 5000");
});
