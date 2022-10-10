'use strict'

const app = require('./app');
const {PORT, SERVER_HOSTNAME} = require('./config');

app.listen(PORT, () => {
    console.log("Service endpoint = " + SERVER_HOSTNAME);
});