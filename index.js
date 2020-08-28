const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');


//inicializaciones
const app = express();
require('./database');

//habilitar body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//establecer carpeta de archivos estaticos
app.use(express.static('public'));

//habilitar morgan
app.use(morgan('dev'));

//habilitar cors
app.use(cors());

//establecer puerto
app.set('port',process.env.PORT || 5000);

//rutas de la aplicacion
app.use(require('./routers/index'));

//puerto en el que escuchara la aplicacion
app.listen(app.get('port'),() => {
    console.log('app on port', app.get('port'));
});

