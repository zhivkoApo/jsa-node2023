const mongoose = require('mongoose');

const Movie = mongoose.model(
    'movie',
    {
        title: String,
        year: Number
    },
    'movies'
);

const create = async (data) => {
    let movie = new Movie(data);
    return movie.save();
};

const getAll = async () => {
    return Movie.find({});
};

const getOne = async (id) => {
    return Movie.findOne({_id: id});
};

const updateOne = async (id, data) => {
    return Movie.updateOne({_id: id}, data);
};

// Add remove function
const remove = async (id) => {
    return Movie.deleteOne({_id: id});
}

module.exports = {
    create,
    getAll,
    getOne,
    updateOne,
    remove
};
