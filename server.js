var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// requires expressJS to use nodeJS to serve your website structure, so index.html will run from the root of folder and map to "/"
app.use(express.static(__dirname + '/'));

// Serves the website using Heroku default port or port 8080
app.listen(process.env.PORT || 8080);