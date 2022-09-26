const express = require('express');

const app = express()

const Router=require('./router/Web');
app.use(Router);

app.get('/', function (req, res) {
    res.send('this is home page')
})

app.listen(4000);