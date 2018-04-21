var	fs = require('fs');

var chalk = require('chalk');

var obj;

var obj2;

var obj3;

var promise = new Promise(function(resolve,reject){
    resolve();
})

promise.then(read).then(readSecond).then(concat).then(function(response){
    console.log('it worked!!');
})

function read(value1){
    value1 = fs.readFile('staedte.json', 'utf8', function(err,data){

        //if(err) throw err;

        value1 = JSON.parse(data);

        JSON.stringify(value1);

        value1.cities.sort(function (a, b) {
            return a.population - b.population;
          }
        );

        //console.log(value1);
        console.log('read1');
    
    });
}

function readSecond(value2){
    value2 = fs.readFile('mehr_staedte.json', 'utf8', function(err,data){

        //if(err) throw err;

        value2 = JSON.parse(data);
        JSON.stringify(value2);

        value2.cities.sort(function (a, b) {
            return a.population - b.population;
          }
        );
        //console.log(value2);
        console.log('read2');
    });
}

function concat(value){

    //value = Array.from(valeu1.cities).concat(Array.from(value2.cities));
    console.log('something happened here!');

}