//Completed October 22, 2015

//Problem: Look at user's badge count & Javascript points

//Solution: Use Node.js to connect to TeamTreehouse's API

var http = require('https');

 //Print out message
var printMessage = function(userName,badgeCount,points){
	var message = userName + ' has ' + badgeCount + ' total badge(s) and ' +
					points + ' points in Javascript';
	console.log(message);
}

//Print out error message
function printError(error){
	console.error(error.message);
};

//Connect to API url

var get = function(userName){

	var request = http.get('https://teamtreehouse.com/' + userName + '.json', function(response){
		var dataBody=''
		response.on('data',function(section){

			//Build up a string of data
			dataBody += section;
		});

		response.on('end',function(){
			if (response.statusCode === 200){
				try{
					//Parse data
					var profile = JSON.parse(dataBody);
					//Print data
					printMessage(userName,profile.badges.length, profile.points.Javascript);
				}catch(error){
					//Parse Error
					printError(error.message);
				}
			}else{

			//Status Code Error
			printError({message: "There was an error getting the profile for " + userName +
			'. (' + http.STATUS_CODES[response.statusCode]+ ')'});
			}
		})

		//Connection Error
		request.on('error', printError);
	})
};


module.exports.get = get;


