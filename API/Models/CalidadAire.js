const { Schema, model } = require('mongoose');

const CalidadAireTempSchema = new Schema({
    id: { type: String, unique: true },
    valor: { type: String },
    nombre: { type: String },
    fecha:  { type: String },
    tipo:  { type: String }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('SensorCalidadAire', CalidadAireTempSchema);