const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/university');

const Table = mongoose.model('users', {
    name: String,
    surname: String,
    email: String,
    password: String,
    age: Number
});

const ObjectId = mongoose.Types.ObjectId;

module.exports = { Table, ObjectId };