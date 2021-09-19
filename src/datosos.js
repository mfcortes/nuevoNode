const os = require('os');

const datosOS =function (){
    try{
        console.log(`HOME DIR  : ${os.homedir()}`);
        console.log (`MEM FREE : ${os.freemem()}`);
        console.log(`HOST NAME : ${os.hostname()}`);
        console.log(`UPTIME    : ${os.uptime()}`);
    }catch(err){
        console.dir(err)
    }    
    
}


module.exports = datosOS;

