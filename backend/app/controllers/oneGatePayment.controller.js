// import OGP Service
const { bniAccountNumber } = require("../config/bni.config");
const ogpService = require("../services/bni/oneGatePayment.service");

// OGP - Get Balance
exports.getBalance = async (req, res) => {
  try {
    const ogpGetBalance = await ogpService.getBalance({ accountNo: bniAccountNumber })

    return res.status(200).send({
      message: 'success',
      data: ogpGetBalance
    });
  } catch (error) {
    if (error?.response) {
      return res.status(error.response.status).send({
        message: error.response.statusText,
        data: error.response.data
      });
    }

    return res.status(500).send({ message: 'Server Error' });
  }
};
