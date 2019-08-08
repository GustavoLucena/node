var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});


//app.set('port', process.env.PORT || 3000);
const PORT = process.env.PORT || 8080;


app.listen(PORT);