var	fs	=	require('fs');
var chalk = require('chalk');
var contents;
var contents2;
var contents3;

var p1 = new Promise( function(resolve,reject){
setTimeout(function(){
  fs.readFile("staedte.json",'utf8',	function(err,	data1)	{

    if (err) throw err;
    contents = JSON.parse(data1);
    if (err) 
			reject(err); 
		else 
      resolve(data1);
      console.log("FILE1")

})



},500)
  });

//---------------------------------------------------------------------------

var p2 = new Promise( function(resolve,reject){

  fs.readFile("mehr_staedte.json",'utf8',	function(err,	data2)	{
    if (err) throw err;
      contents2 = JSON.parse(data2);
      if (err) 
			reject(err); 
		else 
      resolve(data2);
      console.log("FILE2")

})});

//---------------------------------------------------------------------------

Promise.all([p1,p2]).then(function(){
  contents3 = Array.from(contents.cities).concat(Array.from(contents2.cities));
  console.log('Staedte verbunden');

},function(err){
  console.log(err);
}).then(function(){
  console.log('Staedte sortiert');
  contents3.sort(function (a,b){
    return a.population - b.population;
    
 });
}).then(function(){
  var dataWrite = JSON.stringify(contents3)
    
    fs.writeFile("staedteneuA2.2.json", JSON.stringify(contents3));
    console.log('Staedte in File geschrieben');


}).then(function(){
  var i;

  for(i=0;i< contents3.length;i++){
   
   console.log(chalk.blue('\n','name: ',contents3[i].name),
   chalk.red('\n country: ',contents3[i].country),
   chalk.yellow( '\n population: ',contents3[i].population),
           '\n --------------');

}}).catch(function(err){
  console.log(err);
});


