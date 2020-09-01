const cortCtrl = {};
const Cort = require('../models/cort');

cortCtrl.addCort  = async (req,res,next) => {
  try {
    const cort = new Cort(req.body);
    console.log(req.body);
    cort.save();
    res.status(200).json({message: 'Corte Guardado con exito'});
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = cortCtrl;
