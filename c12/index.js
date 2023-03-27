const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://zhivko:xx5pAIg0QFcszlrS@cluster0.mcazydz.mongodb.net/JavascriptAcademy?retryWrites=true&w=majority';

mongoose.connect(connectionString);

const Users = mongoose.model(
    'users',
    {
        _id: mongoose.Types.ObjectId,
        name: String,
        last_name: String,
        date_of_birth: String    
    },
    'users'
);

// Read data from mongodb database

// Users.find({name: /Zh/}).
//     then(users => {
//         console.log(users);
//         // console.log(users[0].name);
//         // console.log(users[0].last_name);
//     }).catch(err => {
//         console.log(err);
//     });

// Users.findOne({name: "Pero"}).
//     then(user => {
//         console.log(user.name);
//         console.log(user.last_name);
//     }).catch(err => {
//         console.log(err);
//     });

// Create new data in mongodb database

let newUser = new Users({
    _id: new mongoose.Types.ObjectId(),
    name: "Pero",
    last_name: "Perovski",
    date_of_birth: new Date("1990-02-01")
});

newUser.save();

// Update existing data in mongodb database

// Users.updateOne()
// Users.update()

// Users.updateOne({_id: "6421e41d6ef7596c28b1742a"}, {last_name: "Zlatevski"}).
//     then(user => {
//         console.log(user);
//     }).catch(err => {
//         console.log(err);
//     });

// Users.findOne({name: "Pero"}).
//     then(user => {
//         console.log(user.name);
//         console.log(user.last_name);
//     }).catch(err => {
//         console.log(err);
//     });

// Delete existing document in mongodb database collection
// Users.delete()

// Users.deleteOne({ _id: "6421e41d6ef7596c28b1742a" }).
//     then(user => {
//         console.log(user.name + ' successfully deleted');
//     }).catch(err => {
//         console.log(err);
//     });

Users.updateOne({_id: '6421d81ab87db8d4d5ecb81f'}, {last_name: "Apostoloski"})
    .then(user => {
        console.log(user);
    }).catch(err => {
        console.log(err);
    });