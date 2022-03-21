const { Schema, model } = require('mongoose');
//Nuevo
const todoTempSchema = new Schema({
    SuciedadAntes: { type: Number },
    SuciedadDespues: { type: Number },
    Humedad:  { type: Number },
    aguaLimpia:  { type: Number },
    Fecha:  { type: String }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Todos', todoTempSchema);