//Completed October 22, 2015

var profile = require('./profile.js');

//Users will be entered in command line 
var users =  process.argv.slice(2);

users.forEach(profile.get);




