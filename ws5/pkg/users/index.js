const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

const User = mongoose.model(
    'user',
    {
        email: String,
        password: String,
        full_name: String,
        profile_img: String
    },
    'users'
);

const getUserInfo = async (user_id) => {
    if (ObjectId.isValid(user_id)) {
        return User.findOne({_id: user_id});
    }

    return null;
};

const uploadProfileImage = async (user_id, imageFilePath) => {
    return User.updateOne({_id: user_id}, { profile_img: imageFilePath });
}

module.exports = {
    getUserInfo,
    uploadProfileImage,
};