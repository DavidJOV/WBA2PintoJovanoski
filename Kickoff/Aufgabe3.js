var	fs	=	require('fs');
var chalk = require('chalk');
var contents;
 fs.readFile("staedte.json",'utf8',	function(err,	data)	{
  if (err) throw err;
    contents = JSON.parse(data);
  contents.cities.sort(function (a,b){
     return a.population - b.population;
  });

    
    fs.writeFile("staedteneu.json", JSON.stringify(contents)); 
     
   
   var i;

   for(i=0;i< contents.cities.length;i++){
    
    console.log(chalk.blue('\n','name: ',contents.cities[i].name),
    chalk.red('\n country: ',contents.cities[i].country),
    chalk.yellow( '\n population: ',contents.cities[i].population),
            '\n --------------');
}


});