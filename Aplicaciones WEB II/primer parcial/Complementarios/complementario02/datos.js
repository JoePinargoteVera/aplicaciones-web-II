const gimnasios=[
  
    {
        id: 1,
        nombre:'Gym Mantarraya',
        ubicacion:'Barrio Cordoba, Manta',
        oferta_de_clases_y_actividades:'gimnasia, aeróbicos',
        horarios:'07:00AM - 21:00PM',
        telefono: '0993432345',
    },
    {
        id: 2,
        nombre:'Gym Laico',
        ubicacion:'Ciudadela Universitaria, Manta',
        oferta_de_clases_y_actividades:'artes marciales y gimnasias hasta de baile, aeróbicos, clases de yoga',
        horarios:'07:30AM - 19:30PM',
        telefono: '0982321234',
    },
    {
        id: 3,
        nombre:'Arnold Gym',
        ubicacion:'El Palmar, Manta',
        oferta_de_clases_y_actividades:'aeróbicos,Body Combat,Zumba',
        horarios:'07:00AM - 21:00PM ',
        telefono: '0996754567',
    },
    {
        id: 4,
        nombre:'Gimnasio Etheba',
        ubicacion:'La Revancha, Manta',
        oferta_de_clases_y_actividades:'entrenamiento funcional, Boot-Camp, fitness y wellnes',
        horarios:'06:00AM - 20:00PM',
        telefono: '0983045439',
    },

    {
        id: 5,
        nombre:'Gym Enigma',
        ubicacion:'Las Cumbres, Manta',
        oferta_de_clases_y_actividades:'Entrenamiento con un personal trainner,aeróbicos,taichi',
        horarios:'05:30 AM - 22:00 PM',
        telefono: '0980003423',
    }
    
]

const cliente = [
    {
        id: 1,
        nombre: 'Tomy ',
        apellido: 'Anchundia ',
        edad: '24',
        cedulaIdentidad: '1313364414',
        numeroCelular: '0979634682',
        
    },
    {
        id: 2,
        nombre: 'Kevin',
        apellido: 'Reyes',
        edad: '23',
        cedulaIdentidad: '1234567890',
        numeroCelular: '0987654321',
        
    }
    
]

const plan=[
    {
        id:1,
        nombre:'Plan 1',
        precio:30
    },
    {
        id:2,
        nombre:'Plan 2',
        precio:25
    },
    {
        id:3,
        nombre:'Plan 3',
        precio:20
    }
]

const coach = [
    {
        idCoach: 1,
        nombreCoach:"Cristiano Leonel",
        apellidoCoach:"Messi Ronaldo",
        numeroCelularCoach:"0988776655",
        cedulaIdentidadCoach:"1352467890",
        direccionCoach:"Av k13 calle k12, Urbirrios",
        descripcionCoach:"soy muy estricto",
        RecordCoach:"instructor del gimnasio 'Banana' en 2014",
        EstudiosRealizadosCoach:"licenciatura en ciencias nutritivas"
    },
    {
        idCoach: 2,
        nombreCoach:"Joe Manuel",
        apellidoCoach:"Pinargote Vera",
        numeroCelularCoach:"0955667788",
        cedulaIdentidadCoach:"1350987654",
        direccionCoach:"Av p14, calle p17, La pradera",
        descripcionCoach:"considero que la comunicacion es la parte mas importante de mi trabajo",
        RecordCoach:"mister olimpia 2009 ",
        EstudiosRealizadosCoach:"bachiller, dos semestres de abogacia"
    }
]

const membresias = [
    {
        id: 1,
        duracion: '30 dias ',
        valor: '20 dolares ',
        tipoPago: 'Efectivo ',


         
    },
    {
        id: 2,
        duracion: '15 dias',
        valor:'10 dolares',
        tipoPago: 'Efectivo ',

        
    }
    
]


// module.exports={
//     clientes: cliente
// }

module.exports={
    gym: gimnasios,
    clientes: cliente,
    planes: plan,
    coaches: coach,
    membresia: membresias,
}

