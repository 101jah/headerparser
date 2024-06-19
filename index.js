// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});



// Define a route for /api/whoami
app.get('/api/whoami', (req, res) => {
  // Retrieve client's IP address from request headers
  const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  // Retrieve client's preferred language from request headers
  const language = req.headers['Accept-language'];

  // Retrieve client's user agent (software) from request headers
  const software = req.headers['User-agent'];

  // Return JSON response with IP address, language, and software
  res.json({ ipaddress: ipAddress, language: language, software: software });
});

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
