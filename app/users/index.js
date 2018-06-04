var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const fs = require('fs');

router.post('/', (req, res) => {

   console.log('posted');
   res.send('POST route on Users.');
   
});

router.get('/', (req, res) => {

    console.log('got');
    res.send('GET route on Users.');
    console.log();

 });

module.exports = router;