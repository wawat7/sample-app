const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    bniEnv: process.env.BNI_ENV,
    bniAppName: process.env.BNI_APP_NAME,
    bniApiKey: process.env.BNI_API_KEY,
    bniApiSecret: process.env.BNI_API_SECRET,
    bniClientId: process.env.BNI_CLIENT_ID,
    bniClientSecret: process.env.BNI_CLIENT_SECRET,
    bniAccountNumber: process.env.BNI_ACCOUNT_NUMBER
};