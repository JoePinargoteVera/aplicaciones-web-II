import {  Response, Request } from 'express';
const { Producto } = require('../models');

const obtenerProductos= async (req: Request,res: Response)=>{
    const { limite= 10  , desde=0   } =  req.query;
    const query= { estado:true   };
    const [ total, productos ] =  await Promise.all(
        [
            Producto.countDocuments(query),
            Producto.find(query)
            .skip(Number(desde))
            .limit(limite)
        ]
    )
    res.json({
        total,
        productos
    })
}
const obtenerProducto = async (req: Request,res: Response)=>{
    const {id} =req.params
    const producto =  await Producto.findById(id);
    res.json(producto);
}
const crearProducto = async (req: Request,res: Response)=>{
    const {estado, ...body } =req.body;
    const existeProducto= await Producto.findOne({nombre:body.nombre});
    if (existeProducto)
    {
        return res.status(400).json({
            message:`El producto con ese nombre ${body.nombre} ya se encuentra registrado`
        })
    }
    const producto = new Producto(body);
    const productoNuevo= await producto.save();
    return res.status(201).json(productoNuevo);

}





export {
    obtenerProductos,
    obtenerProducto,
    crearProducto
}