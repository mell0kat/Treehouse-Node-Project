//Completed October 28, 2015

var router = require("./router.js");

//Problem:  We need a way to look at user's badge count and JS points from
	// a web browser
//Solution: Use Node.js to perform the profile look ups and server our 
	//template via HTTP

// Create web server
var http = require('http');

http.createServer(function(request,response){
	
	router.home(request,response);
	router.user(request,response);

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337');










