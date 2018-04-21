var	fs	=	require('fs');

var chalk = require('chalk');

var obj;

var obj2;

var obj3;

 fs.readFile("staedte.json",'utf8',	function(err,	data1)	{
    fs.readFile("mehr_staedte.json",'utf8',	function(err,	data2)	{

    if (err) throw err;
    obj = JSON.parse(data1);

    obj2 = JSON.parse(data2);
   
    obj3 = Array.from(obj.cities).concat(Array.from(obj2.cities));
 
    obj3.sort(function (a,b){

    return a.population - b.population;
    
 });
    
    fs.writeFile("concatcities.json",'utf8', function(err, data){

        if(err) throw err;

        JSON.stringify(obj3);

        for (arraynumber in obj.cities)
        console.log(chalk.yellow('\n','name: ',obj.cities[arraynumber].name)
                ,chalk.red('\n','country: ',obj.cities[arraynumber].country)
                ,chalk.green('\n','population: ',obj.cities[arraynumber].population)
                ,'\n','\n','-------------');

    });
    
});
}); 