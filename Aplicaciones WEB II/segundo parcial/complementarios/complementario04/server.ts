import express, { Express, Router } from 'express';
import cors from 'cors';

import { router as clientes } from './routes/cliente';
import { dbConnection } from './database/config';   

class Server {
    app: Router;
    router: Router;
    port: Number;
    paths: {[ key: string ]: string};
    private _express: Express;
    constructor(){
        this.app = Router();
        this.router = Router();
        this.port= Number(process.env["PORT"]);
        this.paths = {
            cliente: '/api/clientes',
        }
        this.conectarDB();
        this.middleware();
        this.routes();
        this.router.use('/v2/cliente', this.app);
        this._express = express().use(this.router);
    }
    private async conectarDB(){
        await dbConnection()
    }
    private middleware(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    private routes(){
        this.app.use(this.paths.cliente, clientes)
    }
    listen(){
        this._express.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}/v2/cliente/api/clientes`);
        })
    }
}

export {Server};