var fs = require('fs');
var obj;
var obj2;

fs.readFile('staedte.json', 'utf8', function (err, data) {

    if (err) throw err;
    obj = JSON.parse(data);

    console.log('read1');
//for(arraynumber in obj.cities)
//console.log('\n','name:',obj.cities[arraynumber].name,'\n','country: ', obj.cities[arraynumber].country);
});

fs.readFile('mehr_staedte.json', 'utf8', function (err, data2) {

    if (err) throw err;
    obj2 = JSON.parse(data2);
    console.log('2read');
//for(arraynumber in obj.cities)
//console.log('\n','name:',obj.cities[arraynumber].name,'\n','country: ', obj.cities[arraynumber].country);

});