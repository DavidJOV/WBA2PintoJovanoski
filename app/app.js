const express = require('express');
const fs = require('fs');
const app = express();

//Request Logging
app.use((req,res,next)=>{
    console.log("Time: %d" + "Request-Pfad: " + req.path, Date.now());
    next();
})

const settings = {
    port: process.env.PORT || 3000
};

const users = require('./users/index.js');
app.use('/users', users );

const employees = require('./employees/index.js');
app.use('/employees', employees );

app.listen(settings.port, () => console.log("Example app listening on port: "+settings.port+"!"))