var	fs	=	require('fs');
var chalk = require('chalk');
var contents;
 fs.readFile("staedte.json",	function(err,	data)	{
   contents = JSON.parse(data);
   var i;
   for(i=0;i< contents.cities.length;i++){
    
    console.log(chalk.blue('\n','name: ',contents.cities[i].name),
    chalk.red('\n country: ',contents.cities[i].country),
    chalk.yellow( '\n population: ',contents.cities[i].population),
            '\n --------------');
}
  
}
);