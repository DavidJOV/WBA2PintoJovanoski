var	fs = require('fs');

var chalk = require('chalk');

var obj;

var obj2;

var obj3;

function read(value){
    value = fs.readFile('staedte.json', 'utf8', function(err,data){

        //if(err) throw err;

        value = JSON.parse(data);

        JSON.stringify(value);

        value.cities.sort(function (a, b) {
            return a.population - b.population;
          }
        );

        console.log(value);
    
    });
}

function readSecond(value){
    value = fs.readFile('mehr_staedte.json', 'utf8', function(err,data){

        //if(err) throw err;

        value = JSON.parse(data);
        JSON.stringify(value);

        value.cities.sort(function (a, b) {
            return a.population - b.population;
          }
        );
        console.log(value);
    });
}

var promise = new Promise(function(resolve,reject){
    resolve();
})

promise.then(read).then(readSecond).then(function(response){
    console.log('it worked!!');
})