const mongoose = require ("mongoose");
const conexion = "mongodb+srv://Arnol:ola123@cluster0.glk6z.mongodb.net/gym?retryWrites=true&w=majority";


(async()=>{
    //conectamos a la db
    const conectado = await mongoose.connect(conexion);
    //definir los modelos
    
    const Gimnasio = mongoose.model("Gimnasio", {
        nombre: String,
        direccion: String,
        // ofertaClasesActividades: Array,
        horarios: String,
        numeroCelular: Number,
        //relaciones
        

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
        
    });
    const Cliente = mongoose.model("Cliente", {
        nombre: String,
        apellido: String,
        edad: Number,
        numeroCelular: Number,
        cedulaIdentidad: Number,
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
        idplan: {type: mongoose.Schema.Types.ObjectId, ref: "Plan"},
    });


    const DetalleMembresia = mongoose.model("DetalleMembresia",{
        idgymnasio: {type: mongoose.Schema.Types.ObjectId, ref: "Gimnasio"},
        idcoach: {type: mongoose.Schema.Types.ObjectId, ref:"Coach"},
        idmembresia: {type: mongoose.Schema.Types.ObjectId, ref: "Membresia"},
        idcliente: {type: mongoose.Schema.Types.ObjectId, ref: "Cliente"},
        estado: Boolean
        

    });
    // hay que definir un login y un modelo que englobe la membresia el plan y el cliente
    //******************************************************************************* */
    //
    //
    //
    //
    //******************************************************************************* */


    //Instancia de los modelos
    const gimnasio1 = new Gimnasio ({
        nombre:"EUROGYM",
        direccion: "La Epoca",
        horarios: "6am - 10pm",
        numeroCelular: 0987654321,
    });

    const coach1 = new Coach({
        nombre: "Steven",
        apellido: "Delgado",
        numeroCelular: 0987651234,
        cedulaIdentidad: 1234567890,
        direccion: "La pradera",
        descripcion: "La perseverancia ...",
        historial: "Primer Lugar en Triatlon",
        estudiosRealizados: "Licenciado en Ciencias de la Educacion",
    });
    const cliente1 = new Cliente({
        nombre: "Tomy",
        apellido: "Anchundia",
        edad: 24,
        numeroCelular: 0987612345,
        cedulaIdentidad: 1234509876,
    });
     

    const plan1 = new Plan({
        nombre:"Basico",
        descripcion:[
            "Duracion 30 Dias", 
            "Obten una bebida hidratante dos veces a la semana",
            "Dias lunes promocion"
        ],
        precio: 25
    });
    const membresia1 = new Membresia({
        fechaInicio: new Date(2022,05,20),
        fechaFin: new Date(2022,06,20),
        formaPago: "Efectivo",
        idplan: planAlmacenado._id,
    });

    const detallemembresia1 = new DetalleMembresia({
        idgymnasio: gymnasioAlmacenado._id,
        idcoach: null,
        idmembresia: membresiaAlmacenado._id,
        idcliente: clienteAlmacenado._id,
        estado: true,
        
    });

    //almacenar instacias en db
    const gimnasioAlmacenado = await gimnasio1.save();
    const coachAlmacenado = await coach1.save();
    const clienteAlmacenado = await cliente1.save();
    const planAlmacenado = await plan1.save();
    const membresiaAlmacenado = await membresia1.save();
    const detallemembresiaAlamcenado = await detallemembresia1.save();

    console.log(gimnasioAlmacenado);
    console.log(coachAlmacenado);
    console.log(clienteAlmacenado);
    console.log(planAlmacenado);
    console.log(membresiaALmacenado);
    console.log(detalleMem);


    // 
}) ();