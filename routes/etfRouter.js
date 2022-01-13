const etfController = require('../controllers/etfController.js');

const router = require('express').Router();

// add a new etf to the table
router.post('/', etfController.addEtf )

// access all the etfs in the table
router.get('/', etfController.getAllEtfs)

// access one etf by id
router.get('/:id', etfController.getOneEtf) 

// modify one etf by id
router.put('/:id', etfController.updateEtf )

// delete one etf by id
router.delete('/:id', etfController.deleteEtf )

module.exports = router 