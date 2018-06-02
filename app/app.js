const express = require('express')
const fs = require('fs');
const app = express()

//Request Logging
app.use((req,res,next)=>{
    console.log("Time: %d" + "Request-Pfad: " + req.path, Date.now());
    next();
})

const settings = {
    port: 3000
};

const users = require('./users/users.js');
app.use('/users', users );

app.listen(settings.port, () => console.log("Example app listening on port: "+settings.port+"!"))
