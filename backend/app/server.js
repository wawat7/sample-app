const express = require('express');
const { appPort } = require('./config/common.config');
const bodyParser = require('body-parser');

// init express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// system check
app.get('/health', (req, res) => {
  res.json({ 'message': 'System healthy 😎' });
});

// Require Accont routes
require('./routes/oneGatePayment.routes')(app)

// listen for requests
app.listen(appPort, () => {
  console.log('Server is listening on port ' + appPort);
});