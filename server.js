// load required modules
var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io')(server);

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/assets', express.static(__dirname + '/client/assets'));
app.use('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

server.listen(8001, function() {
    console.log('Server listening on port 8001');
});