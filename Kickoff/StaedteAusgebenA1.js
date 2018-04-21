var	fs	=	require('fs');
var contents;
 fs.readFile("staedte.json",	function(err,	data)	{
   contents = JSON.parse(data);
   var i;
   for(i=0;i< contents.cities.length;i++){
    
    console.log('\n','name: ',contents.cities[i].name,
                '\n country: ',contents.cities[i].country,
                '\n population: ',contents.cities[i].population,
            '\n --------------');
}
  
}
);
//fs.writeFile("StaedteNeu.json",JSON.stringify(contents));


