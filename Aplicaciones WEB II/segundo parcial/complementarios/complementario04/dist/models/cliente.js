"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const ClienteSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del cliente es obligatorio']
    },
    apellido: {
        type: String,
        required: [true, ' El apellido del cliente es obligatorio'],
    },
    estado: {
        type: Boolean,
        required: true,
        default: true,
    },
    telefono: {
        type: String,
        required: [true, 'El teléfono del cliente es obligatorio'],
        unique: true
    },
    cedula: {
        type: String,
        required: [true, 'La cédual del cliente es obligatoria'],
        unique: true
    },
    usuario: {
        type: String,
        require: [true, 'El Nombre de usuario del cliente es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'La contraseña del cliente es obligatoria']
    }
});
const Cliente = mongoose_1.default.model('clientes', ClienteSchema);
exports.Cliente = Cliente;
