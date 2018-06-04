var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
//const fs = require('fs');

router.post('/', (req, res) => {

   console.log('posted');
   res.send('POST route on Users.');
   
});

router.get('/', (req, res) => {

    var person= {
        name:"john",
        lastname:"doe"
    }

    console.log('got');
    res.send(person);
    console.log("really got");

 });

module.exports = router;