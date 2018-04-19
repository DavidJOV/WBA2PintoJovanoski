var fs = require('fs');

fs.readFile('staedte.json', 'utf8', function(err, data) {
    fs.readFile('mehr_staedte.json', 'utf8', function(err,data2) {
        if(err) throw err;
        var obj = JSON.parse(data);
        var obj2 = JSON.parse(data2);
        
    
    data = JSON.stringify(obj);

    var together = obj.concat(obj2);

    console.log(together);

    });
});