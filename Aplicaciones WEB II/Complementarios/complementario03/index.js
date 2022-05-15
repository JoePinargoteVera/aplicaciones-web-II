const mongoose = require ("mongoose");
const conexion = "mongodb+srv://Arnol:ola123@cluster0.glk6z.mongodb.net/gym?retryWrites=true&w=majority"


(async()=>{
    //conectamos a la db
    const conectado = await mongoose.connect(conexion);
    //definir los modelos
    const DatosAutenticacion = mongoose.model("DatosAutenticacion", {
        usuario:String,
        contraseNa: String,
    });
    const Gimnasio = mongoose.model("Gimnasio", {
        nombre: String,
        direccion: String,
        ofertaClasesActividades: Array,
        horarios: Date,
        numeroCelular: Number,
        //relaciones
        clientes:[
            {

                cliente:{type:mongoose.Schema.Types.ObjectId,ref:"Cliente"},
            }
        ],

    });
    const Coach = mongoose.model("Coach", {
        nombre:String,
        apellido: String,
        numeroCelular: Number,
        cedulaIdentidad: Number,
        direccion: String,
        descripcion: String,
        historial: String,
        estudiosRealizados: String,
        //relaciones
        clientes:[
            {

                cliente:{type:mongoose.Schema.Types.ObjectId,ref:"Cliente"},
            }
        ],
    });
    const Cliente = mongoose.model("Cliente", {
        nombre: String,
        apellido: String,
        edad: Number,
        numeroCelular: Number,
        cedulaIdentidad: Number
        // relaciones
    });
    const Plan = mongoose.model("Plan", {
        nombre: String,
        descripcion: Array,
        precio: Number,
        // relaciones
    });
    const Membresia = mongoose.model("Membresia", {
        fechaInicio: Date,
        fechaFin: Date,
        formaPago: String,
        // relaciones
    });
    // hay que definir un login y un modelo que englobe la membresia el plan y el cliente


}) ();