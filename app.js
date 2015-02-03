var express = require('express');
var path = require('path');
var routes = require('./routes/index');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.locals.basedir = path.join(__dirname + '/views');

app.use('/', routes.home);
app.use('/users', routes.users);

app.listen(process.env.PORT || 3000, '0.0.0.0', function(){process.setuid(80)} );
//app.listen(process.env.PORT || 3000);

module.exports = app;
