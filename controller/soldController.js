const soldCtrl = {};
const Sold = require('../models/sold');


soldCtrl.addSold = async (req, res, next) => {
  const sold = new Sold(req.body);
  try {
    await sold.save();
    res.status(200).json({ message: "Venta Realizada" });
  } catch (error) {
    res.status(400).json({ message: "No se pudo concretar la venta" });
  }
};

soldCtrl.updateSold = async (req, res, next) => {
  try {
    const sold = await Sold.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true}
    );
    res.status(200).json({message : 'Venta actualizada correctamente'});
  } catch (error) {
    res.status(400).json({message : 'Error al actualizar la venta'});
  }
};

soldCtrl.deleteSold = async (req,res, next) =>{
  try {
    const sold = await Sold.findByIdAndDelete({_id : req.params.id});
    res.status(200).json({message : 'Venta eliminada Correctamente'});
  } catch (error) {
    res.status(400).json({message : 'Error al eliminar la venta'});
  }
};

soldCtrl.listSold = async (req,res, next) => {
  try {
    const sold = await Sold.find({});
    res.status(200).json(sold);
  } catch (error) {
    res.status(400).json({message : 'No se pudo completar la peticion'});
  }
};

soldCtrl.viewSold = async (req,res,next) => {
  try {
    const sold = await Sold.findById({_id : req.params.id});
    res.status(200).json(sold);
  } catch (error) {
    res.status(400).json({message : 'No se encontro la venta'});
  }
};

soldCtrl.deleteAll = async (req,res,next) => {
  try {
    const sold = await Sold.deleteMany({});
    res.status(200).json({message : 'Todas las ventas han sido eliminadas'});
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = soldCtrl;
