const SensorTemperatura = require('../Models/SensorTemperatura');
const SensorHumedad = require('../Models/Humedad');
const SensorCalidadAire = require('../Models/CalidadAire');
const SensorLuzSolar = require('../Models/SensorLuzSolar');
const todos = require('../Models/Todos');
//Nuevo
async function insertLecturaTemperatura (data){
    try {   
        const lectura = new SensorTemperatura({
            valor: data.valor,
            nombre: data.nombre,
            fecha: data.fecha,
            tipo: data.tipo
        });
        await lectura.save(); 
        return true;    
    } catch (error) {
        console.log(error);   
    }
}
async function insertLecturaHumedad (data){
    try {   
        const lectura = new SensorHumedad({
            valor: data.valor,
            nombre: data.nombre,
            fecha: data.fecha,
            tipo: data.tipo
        });
        await lectura.save(); 
        return true;    
    } catch (error) {
        console.log(error);   
    }
}
async function insertLecturaLuzSolar (data){
    try {   
        const lectura = new SensorLuzSolar({
            valor: data.valor,
            nombre: data.nombre,
            fecha: data.fecha,
            tipo: data.tipo
        });
        await lectura.save(); 
        return true;    
    } catch (error) {
        console.log(error);   
    }
}
async function insertLecturaCalidadAire (data){
    try {   
        const lectura = new SensorCalidadAire({
            valor: data.valor,
            nombre: data.nombre,
            fecha: data.fecha,
            tipo: data.tipo
        });
        await lectura.save(); 
        return true;    
    } catch (error) {
        console.log(error);   
    }
}
async function insertTodasLecturas (data){
    try {   
        const lectura = new todos({
            SuciedadAntes: data.suciedadAntes,
            SuciedadDespues: data.suciedadDespues,
            Humedad: data.humedad,
            aguaLimpia: data.agualimpia,
            Fecha: data.fecha
        });
        await lectura.save(); 
        return true;    
    } catch (error) {
        console.log(error);   
    }
}
module.exports = { insertLecturaTemperatura, insertLecturaHumedad, insertLecturaLuzSolar, insertLecturaCalidadAire, insertTodasLecturas};