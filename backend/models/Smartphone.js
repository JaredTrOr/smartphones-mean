const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Smarthphone = new Schema({
    nombre: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    memoriaRAM: {
        type: String,
        required: true
    },
    almacenamiento: {
        type: String,
        required: true
    },
    sistemaOperativo: {
        type: String,
        required: true
    },
    procesador: {
        type: String,
        required: true
    },
    tasaDeRefresco: {
        type: String,
        required: true
    }
}, { collection: 'smartphones' })

module.exports = mongoose.model('Smartphone', Smarthphone)