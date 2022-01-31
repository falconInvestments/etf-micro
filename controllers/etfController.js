const db = require('../models/index');

const Etf = db.Etfs;

const addEtf = async (req, res) => {
    const { ticker, name, asset, price, porfolio, userId } = req.body;
    try {
        const etf = await Etf.create({name:name, ticker: ticker, asset:asset, price:price, porfolio:porfolio, userId:userId})
        res.status(200).send(etf)
    }catch(e) {
        res.status(400).send("User was not created", e)
    }
}

const getAllEtfs = async (req, res) => {

    let etfs = await Etf.findAll({})
    res.status(200).send(etfs)
}

const getOneEtf = async (req, res) => {
    let id = req.params.id;

    let etfs = await Etf.findOne({where: {id:id}})
    res.status(200).send(etfs)
}

const updateEtf = async (req, res) => {
    let id = req.params.id;

    const etfs = await Etf.update(req.body, {where: {id:id}})
    res.status(200).send(etfs)
}

const deleteEtf = async (req,res) => {
    let id = req.params.id;

    await Etf.destroy({where: {id:id}})
    res.status(200).send(`user with id: ${id} is deleted`)
}


module.exports = {
    addEtf,
    getOneEtf,
    getAllEtfs,
    updateEtf,
    deleteEtf
}