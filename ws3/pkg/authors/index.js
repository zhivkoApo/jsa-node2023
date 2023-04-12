const mongoose = require('mongoose');

const Author = mongoose.model(
    'authors',
    {
        username: String,
        full_name: String
    },
    'authors'
);

const getByUsername = async (username) => {
    return Author.findOne({username});
};

const getAll = async () => {
    return Author.find({});
}

module.exports = {
    getByUsername,
    getAll
};