let request = require('request');

let serviceURL = 'http://localhost:3000';

let resourceURI = serviceURL + '/users/0';

let options = 1;

request ( options, (error, response,body) =>{

    if(error){
        console.log(error);
        return;
    }
})