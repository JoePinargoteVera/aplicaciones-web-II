import mongose from 'mongoose';
import { ICliente } from '../interfaces';
const {Schema, model} = mongose;

const ClienteSchema: mongose.Schema = 
    new Schema<ICliente>({
        nombre: {
            type: String,
            required: [true, 'El nombre del cliente es obligatorio']
            
        },
        apellido: {
            type: String,
            required: [true, ' El apellido del cliente es obligatorio'],
        },
        estado:{
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
        usuario:{
            type: String,
            require: [true, 'El Nombre de usuario del cliente es obligatorio'],
            unique: true
        },
        password:{
            type: String,
            require: [true, 'La contraseña del cliente es obligatoria']
        }

});

const Cliente
= mongose.model<ICliente>('clientes', ClienteSchema);

export {Cliente };