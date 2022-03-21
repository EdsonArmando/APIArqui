const express = require("express");
const app = express();
const cors = require('cors');
const bp = require('body-parser')
const SerialPort = require('serialport').SerialPort;
const Readline = require('@serialport/parser-readline');
const functions = require('./Controllers/LecturasController');

require('./Database.js');
/*La parte comentada deberia de funcionar al conectar el arduino a la pc
  Verificar que COM3 sea el puerto que es utilizado por arduino y el baudRate
*/

/*const port = new SerialPort('COM3',{
	baudRate: 9600
});
const parser = port.pipe(new Readline({ delimiter: '\n' }));
port.on('open',function(){
	console.log("Conexion correcta");
});
parser.on('data',function(data){
	let sucidadAntes = data.sucidadAntes;
	let suciedadDespues = data.suciedadDespues;
	let humedad = data.humedad;
	let cantidadAgua = data.cantidadAgua;
	//Ingresar Info de la temperatura 1, la temperatura exterior.
	const lecturaTempExt = {          
                temperatura1: temperaturaExterior,
                temperatura2: temperaturaInterior,
                lux: luz,
                hum: humedad,
                fecha: new Date()       
            };
  functions.insertTodasLecturas(lecturaTempExt);
});*/

app.use(cors());
app.use(express.json({ limit: '100mb' }))
app.use(bp.json())
app.use(bp.urlencoded({ extended: false }))

//Routes
app.use(require('./Cliente.js'));

app.listen(3002,function(){
	console.log("server practica 1 Arqui2 en puertos 3002");
});

module.exports = app;