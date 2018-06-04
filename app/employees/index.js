var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var obj;

fs.readFile(__dirname+'/employees.json', 'utf8', function (err, data) {
    obj = JSON.parse(data);
    console.log(data);

  }
  );

router.post('/', (req, res) => {

    fs.writeFile("employees.json",JSON.stringify(obj),'utf8', function (err, data){
        
    });

   console.log('posted');
   res.send('POST route on Users.');
   
});

router.get('/', (req, res) => {

    console.log('got');
    res.send(obj);
    console.log("really got");

 });

module.exports = router;
