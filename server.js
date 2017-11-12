const express = require('express');
const app = express(); //建立一個Express伺服器

const server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.listen(server_port, server_ip_address, function () {
  console.log("Listening on " + server_ip_address + ", server_port " + server_port)
});

app.get('/', function (req, res) {
  res.send('Express is excellent!')
});