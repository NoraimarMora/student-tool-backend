const { checkSchema } = require('express-validator');

module.exports = checkSchema({
    semester: {
        isInt: true
    },
    uc: {
        isInt: true
    },
    'pre_req.uc': {
        isInt: true,
    }
});