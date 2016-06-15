var express = require('express');
var wanger = require('wagner-core');

require('./Models/models')(wagner);

var app = express();

app.use('app/v1', require('./api')(wagner));
app.lister(3000);

console.log('Listen on port 3000!!');

