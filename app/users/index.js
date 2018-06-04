var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var obj;

fs.readFile(__dirname+'/users.json', 'utf8', function (err, data) {
    obj = JSON.parse(data);
    //console.log(data);

  });

router.post('/', (req, res) => {

    fs.writeFile(__dirname+"/users.json",JSON.stringify(obj),'utf8', function (err, data){

        if (err) throw err;

    });

    res.send(obj);
   
});

router.get('/', (req, res) => {

    res.send(obj);

 });

module.exports = router;
