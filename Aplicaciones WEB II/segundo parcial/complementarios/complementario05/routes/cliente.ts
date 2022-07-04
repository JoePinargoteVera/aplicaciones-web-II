import { Router } from "express";
import { check } from "express-validator";
import { Cliente } from "../controllers";
const {
    obtenerClientes,
    obtenerCliente,
    crearCliente,
    actualizarCliente,
    eliminarCliente
} = Cliente;
import funciones from '../middlewares';
const {validarCampos} = funciones;

const router = Router();

router.get('/clientes', obtenerClientes)
router.get('/cliente:id', check('id', 'El id de mongo no es valido').isMongoId(), validarCampos, obtenerCliente)
router.post('/nuevo/cliente', check('nombre', 'El nombre del cliente es obligatorio').not().isEmpty(), validarCampos, crearCliente)
router.put('/actualizar/cliente:id', check('id', 'El id de mongo no es valido').isMongoId(), validarCampos, actualizarCliente )
router.delete('/eliminar/cliente:id', check('id', 'El id de mongo no es valido').isMongoId(), validarCampos, eliminarCliente )

export {router};