const PATH_PROJECT = '/dist/sip-property-management-angula';
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + PATH_PROJECT));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + PATH_PROJECT + '/index.html'));
  });

var server_port = process.env.PORT || 8080;
var server_host = '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});