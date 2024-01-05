const { getAllUserDB, getByIdUserDB, createUserDB, updateUserDB, deleteUserDB } = require("../repository/user.repository");


async function getAllUser() {
    const data = await getAllUserDB();
    return data;
};

async function getByIdUser(_id) {
    const data = await getByIdUserDB(_id);
    return data;
};

async function createUser(user) {
    const data = await createUserDB(user);
    return data;
};

async function updateUser(_id, user) {
    const data = await updateUserDB(_id, user);
    return data;
};

async function deleteUser(_id) {
    const data = await deleteUserDB(_id);
    return data;
}



module.exports = { getAllUser, getByIdUser, createUser, updateUser, deleteUser };