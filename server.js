const express = require('express');
const app = express(); //建立一個Express伺服器

app.listen(8080, function () {
  console.log('Example app is running on port 8080!');
});

app.get('/', function (req, res) {
  res.send('Express is excellent!')
});