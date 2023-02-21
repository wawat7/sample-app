const {
  bniClientId,
  bniClientSecret,
  bniApiKey,
  bniApiSecret,
  bniAppName,
  bniEnv,
} = require("../../config/bni.config");
const { BNIClient, OneGatePayment } = require("bni-nodejs");

const client = new BNIClient({
  env: bniEnv, // dev, sandbox or prod
  clientId: bniClientId,
  clientSecret: bniClientSecret,
  apiKey: bniApiKey,
  apiSecret: bniApiSecret,
  appName: bniAppName,
});
const ogp = new OneGatePayment(client);

// Get Balance
exports.getBalance = async (params = { accountNo }) => {
  return await ogp.getBalance({
    accountNo: params.accountNo,
  });
};
