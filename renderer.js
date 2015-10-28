//Completed October 28, 2015

var fs = require("fs");

function mergeValues(values, content){
	//Cycle over keys 
	for (var key in values){
		//Replace all {{keys}} with values from the values object
		content = content.replace("{{" + key + "}}",values[key]);
	}
		//Return merged content
	return content;
}

function view(templateName, values, response){
	//Read from the teamplate file
	var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"}); 
	//Insert values in to the content
	fileContents = mergeValues(values, fileContents);
	//Write out the contents to response
	response.write(fileContents);
	
}

module.exports.view =view;