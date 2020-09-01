const express = require('express');

const router = express.Router();

const soldController = require('../controller/soldController');

router.post('/sold/', soldController.addSold);
router.get('/sold/:id', soldController.viewSold);
router.get('/sold/', soldController.listSold);
router.put('/sold/:id', soldController.updateSold);
router.delete('/sold/:id', soldController.deleteSold);
router.delete('/deleteSold/', soldController.deleteAll);

module.exports = router;