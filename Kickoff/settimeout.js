var fs = require('fs');

var chalk = require('chalk');

var obj;

var obj2;

var obj3;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

    var p = new Promise(function(resolve, reject) {

        setTimeout(function(){
	
        // Do an async task async task and then...
        fs.readFile('staedte.json','utf8', function(err, data){
    
            obj = JSON.parse(data);
    
            if (err) 
                reject(err); 
            else 
                resolve(data);
        });
        
        console.log('json1 gelesen');
    },3000)
    
    });

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

var p2 = new Promise(function(resolve, reject) {
	
    // Do an async task async task and then...
	fs.readFile('mehr_staedte.json','utf8', function(err, data2){

		obj2 = JSON.parse(data2);

		//console.log('read');

		if (err) 
			reject(err); 
		else 
			resolve(data2);
    });
    
    console.log('json2 gelesen');  

});

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

Promise.all([p,p2])
.then(function(){

    obj3 = Array.from(obj2.cities).concat(Array.from(obj.cities));
    console.log('concated');

    obj3.sort(function (a, b) {
		return a.population - b.population;
	  }
    );

    console.log('concated array sorted');

})
.then(function(){

    fs.writeFile("concatcities3.json",JSON.stringify(obj3),'utf8', function(err, data3){

	})

	console.log('concatcities3 now exists!');
})
.then(function(){

    for(i=0;i< obj3.length;i++){
        
        console.log(chalk.blue('\n','name: ',obj3[i].name),
                    chalk.red('\n country: ',obj3[i].country),
                    chalk.yellow( '\n population: ',obj3[i].population),
                '\n --------------');
	}
})
.catch(function(err) {

	console.log(err);

})