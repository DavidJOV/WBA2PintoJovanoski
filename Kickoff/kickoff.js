var	fs	=	require('fs');
var chalk = require('chalk');
var obj;

fs.readFile('staedte.json', "utf8",	function(err,data)	{
  if (err) throw err;

  var obj = JSON.parse(data);

  for (arraynumber in obj.cities)
  console.log(chalk.yellow('\n','name: ',obj.cities[arraynumber].name)
              ,chalk.red('\n','country: ',obj.cities[arraynumber].country)
              ,chalk.green('\n','population: ',obj.cities[arraynumber].population)
              ,'\n','\n','-------------');


});