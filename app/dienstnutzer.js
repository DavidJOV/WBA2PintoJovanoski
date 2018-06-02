let request = require('request');

let serviceURL = 'http://localhost:3000';

let resourceURI = serviceURL + '/users/0';

let options = {
    uri: resourceURI,
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

request ( options, (error, response,body) =>{

    if(error){
        console.log(error);
        return;
    }

    console.log('-------body-------');
    console.log(JSON.parse(body));
    console.log('------------------');
})