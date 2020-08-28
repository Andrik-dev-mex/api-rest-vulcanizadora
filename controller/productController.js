const Products = require("../models/products");

exports.list = async (req, res) => {
  const product = await Products.find({});
  try {
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: "Error en la solicitud" });
  }
};

exports.add = async (req, res) => {
  try {
    const product = new Products(req.body);
    await product.save();
    console.log(req.body);
    res.status(200).json({ message: "El producto fue agregado" });
  } catch (error) {
    res.json(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const product = await Products.findById({ _id : req.params.id });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: "Error en la peticion" });
  }
};

exports.update = async (req, res, next) => {
  try {
    const product = await Products.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar datos" });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const product = await Products.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "producto eliminado con exito" });
  } catch (error) {
    res.status(400).json({ message: "Error en la solicitud" });
  }
};

exports.showBySku = async (req, res, next) => {
  try {
    const product = await Products.findOne({sku : req.params.sku});
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
}
