var express = require('express');
var routes = require('./routes/index');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.use('/', routes.home);
app.use('/users', routes.users);

app.listen(process.env.PORT || 3000);
