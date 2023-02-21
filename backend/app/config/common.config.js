const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    log: process.env.LOG,
    appPort: process.env.APP_PORT
};