/*
* Primary file for API
*
*
*/

// Dependencies
var http = require('http');
var url = require('url');

// console.log(JSON.stringify(http, "", 2));

// creating the server object
var server = http.createServer(function(req, res) {

    // parse URL
    var parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);

    res.end("Hoorey server\n");
})

// start the server, and listen it on port 3000
server.listen(3131, function() {
    console.log("I am on to anything!");
})