"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const { obtenerClientes, obtenerCliente, crearCliente, actualizarCliente, eliminarCliente } = controllers_1.Cliente;
const middlewares_1 = __importDefault(require("../middlewares"));
const { validarCampos } = middlewares_1.default;
const router = (0, express_1.Router)();
exports.router = router;
router.get('/clientes', obtenerClientes);
router.get('/cliente:id', (0, express_validator_1.check)('id', 'El id de mongo no es valido').isMongoId(), validarCampos, obtenerCliente);
router.post('/nuevo/cliente', (0, express_validator_1.check)('nombre', 'El nombre del cliente es obligatorio').not().isEmpty(), validarCampos, crearCliente);
router.put('/actualizar/cliente:id', (0, express_validator_1.check)('id', 'El id de mongo no es valido').isMongoId(), validarCampos, actualizarCliente);
router.delete('/eliminar/cliente:id', (0, express_validator_1.check)('id', 'El id de mongo no es valido').isMongoId(), validarCampos, eliminarCliente);
