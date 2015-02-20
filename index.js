var server = require("./server");

server.addRoute("/test",function(params){
    return server.template("index.html");
});

server.start();
