var fs = require('fs');

var chalk = require('chalk');

var obj;

var obj2;

var obj3;

fs.readFile('staedte.json', 'utf8', function (err, data) {

    fs.readFile("mehr_staedte.json",'utf8',	function(err,	data2)	{

    if (err) throw err;

    obj = JSON.parse(data);

});

    obj2 = JSON.parse(data2);

});

obj3 = Array.from(obj.cities).concat(Array.from(obj2.cities));

    obj3.sort(function (a, b) {
        return a.population - b.population;
    });

    fs.writeFile("concatstaedte.json",'utf8', function (err, data){

        if (err) throw err;
        JSON.stringify(obj3);
    
        for (arraynumber in obj3.cities)
        console.log(chalk.yellow('\n','name: ',obj3.cities[arraynumber].name)
                    ,chalk.red('\n','country: ',obj3.cities[arraynumber].country)
                    ,chalk.green('\n','population: ',obj3.cities[arraynumber].population)
                    ,'\n','\n','-------------');
    
    }
    );
   