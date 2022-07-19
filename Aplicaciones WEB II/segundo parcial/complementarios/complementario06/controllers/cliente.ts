import { Request, Response }  from 'express';
import { ICliente } from '../interfaces';
import { Cliente } from '../models';


const obtenerClientes = async (req: Request, res: Response) => {
    const { limite= '10', desde= '0', } = req.query;
    const query= { estado:true };
    const [ total, clientes ]: [Number, ICliente[] ] = await Promise.all(
        [
            Cliente.countDocuments(query),
            Cliente.find(query)
            .skip( Number(desde) )
            .limit( Number(limite) )
        ]
    )
    res.json({
        total,
        clientes
    })
};

const obtenerCliente = async ( req: Request, res: Response ) => {
    const {id} = req.params;
    const cliente: ICliente|null = await Cliente.findById(id);
    res.json(cliente);
};

const crearCliente = async ( req: Request, res: Response ) => {
    const {estado, ...body } = req.body as ICliente; 
    const existeCliente = await Cliente.findOne({cedula:body.cedula});
    const existeCliente2 = await Cliente.findOne({telefono:body.telefono});
    if (existeCliente)
    {
        return res.status(400).json({
            message:`El Cliente con el número de cedula ${body.cedula} ya se encuentra registrado`
        })
    }else
    if (existeCliente2)
    {
        return res.status(400).json({
            message:`El Cliente con el número de telefono ${body.telefono} ya se encuentra registrado`
        })
    }
    const cliente = new Cliente(body);
    const clienteNuevo = await cliente.save();
    return res.status(201).json(clienteNuevo);

};

const actualizarCliente = async ( req: Request, res: Response ) => {
    const {id} = req.params;
    const {estado, ...body} = req.body;
    const clienteActualizado: ICliente|null =
     await Cliente.findByIdAndUpdate(id, body, {new:true});
     res.json(clienteActualizado);
};

const eliminarCliente = async ( req: Request, res: Response ) => {
    const {id} = req.params;
    const clienteEliminado: ICliente|null =
     await Cliente.findByIdAndUpdate(id, {estado:false}, {new:true})
     res.json(clienteEliminado);
};

export {
    obtenerClientes,
    obtenerCliente,
    crearCliente,
    actualizarCliente,
    eliminarCliente
}