const express = require('express')
const app = express()

var users = require('./users/users.js');
app.use('/users', users );

app.listen(3000, () => console.log('Example app listening on port 3000!'))
