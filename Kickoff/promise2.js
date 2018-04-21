var fs = require('fs');

var obj;

var p = new Promise(function(resolve, reject) {
	
    // Do an async task async task and then...
	fs.readFile('staedte.json','utf8', function(err, data){

		obj = JSON.parse(data);
		console.log('read');

		if (err) 
			reject(err); 
		else 
			resolve(data);
	});
});

p.then(function() { 
	console.log(obj);
}).catch(function(err) {
	console.log(err);
})