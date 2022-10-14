const { checkSchema } = require('express-validator');

module.exports = checkSchema({
    email: {
        isEmail: true
    },
    password: {
        isLength: {
            errorMessage: 'Password should be at least 6 chars long',
            options: {
                min: 6
            }
        }
    },
    uc: {
        isInt: true
    }
});