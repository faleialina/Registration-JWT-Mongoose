const { Table, ObjectId } = require("../db");

async function getAllUserDB() {
    const data = await Table.find();
    return data;
};

async function getByIdUserDB(_id) {
    const data = await Table.find({ _id: new ObjectId(_id) });
    return data;
};

async function createUserDB(user) {
    await Table.create(user);
    const data = await Table.find();
    return data;
};

async function updateUserDB(_id, user) {
    await Table.updateOne({ _id: new ObjectId(_id) }, { $set: user });
    const data = await Table.find();
    return data;
};

async function deleteUserDB(_id) {
    await Table.deleteOne({ _id: new ObjectId(_id) });
    const data = await Table.find();
    return data;
}


module.exports = { getAllUserDB, getByIdUserDB, createUserDB, updateUserDB, deleteUserDB };