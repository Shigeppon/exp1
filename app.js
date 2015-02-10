var express = require('express');
var path = require('path');
var routes = require('./routes/index');

var app = express();
var expressWs = require('express-ws')(app);

var connections = [];

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.locals.basedir = path.join(__dirname + '/views');

app.use('/', routes.top);
app.use('/users', routes.users);

app.ws('/',function(ws,req) {
  console.log('socket open');

  connections = expressWs.getWss('/');

  ws.on('message', function(msg) {
    var date = new Date();
    console.log(date);
    connections.clients.forEach(function(client){
      client.send(msg + date );
    });
  });

  ws.on('close', function() {
    console.log('close');
    console.log(connections.clients.length);
  });
});

setInterval( function(){
  var date = new Date();
  connections = expressWs.getWss('/');

  console.log( connections.clients.length + " " + date);

  connections.clients.forEach(function(client){
    client.send("time " + date );
  });
},1000);
app.listen(process.env.PORT || 3000, '0.0.0.0', function(){process.setuid(80)} );
//app.listen(process.env.PORT || 3000);

module.exports = app;
