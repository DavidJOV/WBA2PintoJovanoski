let request = require('request');

let serviceURL = 'http://localhost:3000';

let resourceURI = serviceURL + '/users';

let options = {
    uri: resourceURI,
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

request(options,(err, res, body) =>{

    if(err){
        console.log(err);
        return;
    }
    
    console.log(JSON.parse(body));

})