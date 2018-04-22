var fs = require('fs');

var chalk = require('chalk');

var obj;

var obj2;

var p = new Promise(function(resolve, reject) {
	
    // Do an async task async task and then...
	fs.readFile('staedte.json','utf8', function(err, data){

		obj = JSON.parse(data);
		console.log('read');

		obj.cities.sort(function (a, b) {
			return a.population - b.population;
		  }
		);

		if (err) 
			reject(err); 
		else 
			resolve(data);
	});

});

p.then(function() { 

	for(i in obj.cities){
		console.log(chalk.red('\n',obj.cities[i].name));
	}

}).catch(function(err) {
	console.log(err);
})	