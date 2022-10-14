const { checkSchema } = require('express-validator');

module.exports = checkSchema({
    name: {
        isString: true
    }
});