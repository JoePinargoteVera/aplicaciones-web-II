"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarCliente = exports.actualizarCliente = exports.crearCliente = exports.obtenerCliente = exports.obtenerClientes = void 0;
const models_1 = require("../models");
const obtenerClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = '10', desde = '0', } = req.query;
    const query = { estado: true };
    const [total, clientes] = yield Promise.all([
        models_1.Cliente.countDocuments(query),
        models_1.Cliente.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    res.json({
        total,
        clientes
    });
});
exports.obtenerClientes = obtenerClientes;
const obtenerCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cliente = yield models_1.Cliente.findById(id);
    res.json(cliente);
});
exports.obtenerCliente = obtenerCliente;
const crearCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { estado } = _a, body = __rest(_a, ["estado"]);
    const existeCliente = yield models_1.Cliente.findOne({ cedula: body.cedula });
    if (existeCliente) {
        return res.status(400).json({
            message: `El Cliente con el número de cedula ${body.cedula} ya se encuentra registrado`
        });
    }
    const cliente = new models_1.Cliente(body);
    const clienteNuevo = yield cliente.save();
    return res.status(201).json(clienteNuevo);
});
exports.crearCliente = crearCliente;
const actualizarCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _b = req.body, { estado } = _b, body = __rest(_b, ["estado"]);
    const clienteActualizado = yield models_1.Cliente.findByIdAndUpdate(id, body, { new: true });
    res.json(clienteActualizado);
});
exports.actualizarCliente = actualizarCliente;
const eliminarCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const clienteEliminado = yield models_1.Cliente.findByIdAndUpdate(id, { estado: false }, { new: true });
    res.json(clienteEliminado);
});
exports.eliminarCliente = eliminarCliente;
