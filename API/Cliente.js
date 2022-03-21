const { Router } = require('express');
const router = Router();
const SensorTemperatura = require('./Models/SensorTemperatura');
const SensorHumedad = require('./Models/Humedad');
const SensorLuz = require('./Models/SensorLuzSolar');
const SensorAire = require('./Models/CalidadAire');
const todos = require('./Models/Todos');
const functions = require('./Controllers/LecturasController');


router.get("/getLecturasTodas", async(req, res)=>{
    try {
        const lec = await todos.find();
        let lista_lecturas = [];
        lec.forEach((item) => {
            console.log(item);
            const lecturaAux = {
                suciedadAntes: item.SuciedadAntes,
                suciedadDespues: item.SuciedadDespues,
                humedad: item.Humedad,
                cantidadAgua: item.aguaLimpia,
                fecha: item.Fecha
            };
            lista_lecturas.push(lecturaAux);
        });

        res.status(200).json(lista_lecturas);
    } catch (error) {
        console.log(error);
        res.status(200).json({respuesta: 0})
    }
});
//Endpoint para insertar una lectura a la base datos solo como prueba. Nuevo
router.post("/testInsert", async(req, res)=>{
    let {suciedadAntes,suciedadDespues,humedad,agualimpia,fecha} = req.body;
    try {
        const lecturaAux = {          
                suciedadAntes: suciedadAntes,
                suciedadDespues: suciedadDespues,
                humedad: humedad,
                agualimpia: agualimpia,
                fecha: fecha
            };
        //res.status(202).json({respuesta: lecturaAux})
        if(functions.insertTodasLecturas(lecturaAux));
            res.status(202).json({respuesta: 1})
    } catch (error) {
        console.log(error);
        res.status(200).json({respuesta: 0})
    }
});

module.exports = router;

//docker run -d -p 27017:27017 --name dbPractica1 -v "/c/Users/edson/Desktop/Proyectos/Arqui2/VolumenesPractica1:/data/db" -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=Arqui2022_2022 mongo
//docker exec -it dbPractica1 sh
//mongo -u mongoadmin -p Arqui2022_2022