const {Router } = require('express');
const data = require('../../data/data.json');

const routes = Router();

routes.get('/',(req,res)=>{
    console.log('Se solicito un request GET');
    res.send('Hola Don Perro, como esta usted, lo estamos vigilando');
});


routes.post('/',(req,res)=>{
    console.log('Se solicito un requiest POST');
    res.send(data);
})

module.exports = routes;

