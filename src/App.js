const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index');


const app = express();

app.set('port', 3000);

// Midleware
app.use(morgan('dev'));
app.use(express.json());


//Rutas
app.use('/',routes);


app.listen(app.get('port'),()=>{
      console.log(`Servicio iniciado en puerto ${app.get('port')}`);
});


