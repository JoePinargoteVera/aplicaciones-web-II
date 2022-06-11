import { Router }from 'express';
import { check} from 'express-validator';

import {
    crearProducto,
    obtenerProducto,
    obtenerProductos
} from '../controladores/producto';


import { validarCampos } from '../middlewares/validarCampos';

const router  = Router();

router.get('/', obtenerProductos );
router.get('/:id' , check('id','El id no es válidio').isMongoId()
, validarCampos  , obtenerProducto );
router.post('/', check('nombre','El nombre es requerido').not().isEmpty() 
, validarCampos ,crearProducto);

export = router;