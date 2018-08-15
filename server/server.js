const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const path = require('path')
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/secret');
var app = express();


mongoose.connect(config.database, function(err){
  if(err) console.log(err);
  console.log('Connected to DB');
})

app.use(cors())


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));

const testroutes = require('./routes/test');

app.use(testroutes);

const port = process.env.PORT || 5050;


app.listen(port, () => {

    console.log( `Express server listening on port ${port}`);
})
