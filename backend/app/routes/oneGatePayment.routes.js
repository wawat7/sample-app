module.exports = (app) => {
  //import one gate payment controller
  const oneGatePayment = require('../controllers/oneGatePayment.controller');

  // OGP - Get Balance
  app.get('/one-gate-payment/get-balance', oneGatePayment.getBalance);
};