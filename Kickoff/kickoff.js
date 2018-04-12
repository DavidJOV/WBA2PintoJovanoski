var	fs	=	require('fs');
var obj;

fs.readFile('staedte.json', "utf8",	function(err,data)	{
  if (err) throw err;

  var obj = JSON.parse(data);

  for (arraynumber in obj.cities)
  console.log('\n','name: ',obj.cities[arraynumber].name
              ,'\n','country: ',obj.cities[arraynumber].country
              ,'\n','population: ',obj.cities[arraynumber].population
              ,'\n','\n','-------------');

});