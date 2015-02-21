var http = require("http");
var url = require("url");
var fs = require('fs');
var sys = require('sys');

var route = function(path,res){
    if (path == "/about"){
        res.writeHead(200,{"Content-Type": "text/plain"});
        res.write("About page");
        res.end();
    }else{
        res.writeHead(200,{"Content-Type": "text/plain"});
        res.write("Other pages");
        res.end();
    };
};

http.createServer(function(req, res) {
    console.log("Request received.");
    var pathname = url.parse(req.url).pathname;
    route(pathname,res);
}).listen(5000,"127.0.0.1");
console.log("Server has started.");

/*var request = require('request');

var routes = { }; //container that holds routes and respective functions

var staticFiles = {"orbit.js":"", "index.html":""}; //static files named here
//needs to automatically read off of a static folder

//reads text from file
var template = function(path){
    return fs.readFileSync(path, "utf-8");
};

//registers a function to a route
var addRoute = function(path,f){
    routes[path] = f;
};

//writes text to site as html
var getHtml = function(data,res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data);
    res.end();
};

//writes text to site as plain text
var getText = function(data,res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write(data);
    res.end();
};

//runs route function if path is a route, returns text if path is a static file, and returns 'route not found' if path does not lead anywhere
var route = function(path,res){
    if (path in routes){
        getHtml(routes[path](),res);
    }else if (path.slice(1) in staticFiles){
        getText(template(path.slice(1)),res);
    }else{
        res.writeHead(200,{"Content-Type": "text/plain"});
        res.write("Route not found");
        res.end();
    };
};

//starts the server up and routes requests
var start = function(){
    http.createServer(function(req, res) {
        console.log("Request received.");
        var pathname = url.parse(req.url).pathname;
        route(pathname,res);
    }).listen(5000,"127.0.0.1");
    console.log("Server has started.");
};

//export for use in another js file
exports.start = start;
exports.addRoute = addRoute;
exports.template = template;*/
