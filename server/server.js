var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 80);

app.use(express.static('/dist'));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
});
