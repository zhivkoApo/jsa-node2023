const { Validator } = require('node-input-validator');

const WELCOME = {
    from: 'required|email',
    to: 'required|email',
    subject: 'required|string',
    first_name: 'required|string',
    last_name: 'required|string'
};

const RESET_PASSWORD = {
    from: 'required|email',
    to: 'required|email',
    subject: 'string',
    first_name: 'string'
};

const validate = async (data, schema) => {
    let validator = new Validator(data, schema);
    let mail = await validator.check();
    if (!mail) {
        throw 'Invalid data';
    }
};

module.exports = {
    WELCOME,
    RESET_PASSWORD,
    validate
};