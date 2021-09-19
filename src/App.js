const datosOs = require('./datosos');
const calculo = require('./calculo');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index');
const datosOS = require('./datosos');


const app = express();

app.set('port', process.env.PORT  || 3000);



// Midleware
datosOS();
calculo();
app.use(morgan('dev'));
app.use(express.json());


//Rutas
app.use('/',routes);


app.listen(app.get('port'),()=>{
      console.log(`Servicio iniciado en puerto ${app.get('port')}`);
});


