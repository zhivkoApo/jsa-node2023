const mongoose = require('mongoose');
const config = require('../config');

const init = () => {
    // const dsn = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
    const url = config.get('settings').db_url;
    const dbname = config.get('settings').db_name;
    const username = config.get('settings').db_username;
    const password = config.get('settings').db_password;
    const dsn = `mongodb+srv://${username}:${password}@${url}.net/${dbname}?retryWrites=true&w=majority`;
    mongoose.connect(dsn);
};

module.exports = {
    init
};