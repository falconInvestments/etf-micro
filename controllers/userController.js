const db = require('../models/index');

const User = db.Users;


const addUser = async (req, res) => {
    const { name } = req.body;
    try {
        const user = await User.create({name:name})
        res.status(200).send(user)
    } catch(e) {
        res.status(400).send("User was not created", e)
    }
}

const getAllUsers = async (req, res) => {

    let users = await User.findAll({
        include:db.Etfs
    })
    res.status(200).send(users)
}

const getOneUser = async (req, res) => {
    let id = req.params.id;

    let users = await User.findOne({where: {id:id}, include: db.Etfs})
    res.status(200).send(users)
}

const updateUser = async (req, res) => {
    let id = req.params.id;

    const user = await User.update(req.body, {where: {id:id}})
    res.status(200).send(user)
}



const deleteUser = async (req,res) => {
    let id = req.params.id;

    await User.destroy({where: {id:id}})
    res.status(200).send(`user with id: ${id} is deleted`)
}

module.exports = {
    addUser,
    getOneUser,
    getAllUsers,
    updateUser,
    deleteUser
}
