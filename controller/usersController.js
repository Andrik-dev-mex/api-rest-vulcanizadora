const userCtrl = {};

const Users = require('../models/users');


userCtrl.addUser = async (req, res) => {
    const user = new Users(req.body);
    try {
        await user.save();
        res.status(200).json({message : 'Usuario guardado'});
    } catch (error) {
        res.json(error);
    }  
};

userCtrl.updateUser = async (req, res, next) => {
        try {
            let user = await Users.findByIdAndUpdate({_id: req.params.id},
                req.body,
                {new: true});
                res.status(200).json({message : 'Usuario Actualizado Correctamente'});
        } catch (error) {
            res.json(error);
        }
};

userCtrl.getUsers = async (req,res,next) => {
    try {
        const user = await Users.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({message : 'No existen usuarios'});
    }
};
userCtrl.getUser = async (req,res, next) => {
    try {
        const user = await Users.findById({_id: req.params.id});
        console.log(user);
        res.json(user);
    } catch (error) {
        res.json({message:'no existe el usuario'});
    }
};
userCtrl.deleteUser = async (req,res,next) => {
    try {
        let user = await Users.findByIdAndDelete({_id : req.params.id});
        res.status(200).json({});
    } catch (error) {
        res.status(400);
    }
};
module.exports = userCtrl;