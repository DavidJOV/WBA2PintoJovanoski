var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {

   console.log('posted');
   res.send('POST route on Users.');
   
});

router.get('/', (req, res) => {

    console.log('got');
    res.send('GET route on Users.');

 });

module.exports = router;