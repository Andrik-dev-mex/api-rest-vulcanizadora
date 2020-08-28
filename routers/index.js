const express = require('express');

const router = express.Router();

const productController = require('../controller/productController');
const userController = require('../controller/usersController');
const soldController = require('../controller/soldController');
const cortController = require('../controller/cortController');



router.get('/', (req, res) =>{res.send('Todo correcto')});
//productos
//get: obtener todos los productos
router.get('/products/', productController.list);
//post: agregar producto
router.post('/products/', productController.add);
//get: obtener producto por sku
router.get('/getProduct/:sku', productController.showBySku);
//obtener producto por id
router.get('/products/:id', productController.show);
//put: actualizar producto
router.put('/products/:id', productController.update);
//delete: borrar producto
router.delete('/products/:id', productController.delete);

//usuarios
//agregar usuario
router.post('/addUser/', userController.addUser);
//eliminar usuario
router.delete('/deleteUser/:id', userController.deleteUser);
//obtener usuario por usuario
router.get('/getUser/:id', userController.getUser);
// obtener todos los empleados
router.get('/getUsers/', userController.getUsers);
//actualizar empleado
router.put('/updateUser/:id', userController.updateUser);

//venta
//agregar venta
router.post('/sold/', soldController.addSold);
//ver venta por id
router.get('/sold/:id', soldController.viewSold);
//ver todas la ventas
router.get('/sold/', soldController.listSold);
//actualizar venta
router.put('/sold/:id', soldController.updateSold);
//cancelar venta
router.delete('/sold/:id', soldController.deleteSold);
//borrar todas las ventas
router.delete('/deleteSold/', soldController.deleteAll);

router.post('/addCort/', cortController.addCort);



module.exports = router;        