import mongoose, {Schema, model} from 'mongoose';
import {IProducto} from '../interfaces/IProducto'

const ProductoSchema:mongoose.Schema = new Schema({
    nombre:{
        type:String,
        required:true,
        unique:true
    },
    estado:{
        type:Boolean,
        required:true,
        default:true
    },
    precio:{
        type:Number,
        default:0
    },
    costo:{
        type:Number,
        default:0
    },
    minimo:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    }

})
const Producto = mongoose.model<IProducto>('productos', ProductoSchema);

export {Producto};
