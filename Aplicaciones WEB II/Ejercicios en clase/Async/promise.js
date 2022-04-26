const platos =[
    {
        id: 1,
        descripcion: 'chaulafan',
        idrestaurante:1
    },
    {
        id: 2,
        descripcion: 'arroz con camaron',
        idrestaurante:1
    },
    {
        id: 3,
        descripcion: 'parrillada',
        idrestaurante: 2
    },
    {
        id: 4,
        descripcion: 'chuzo',
        idrestaurante: 2
    }
]

const restaurantes =[
    {
        id:1,
        nombre:'chifa manta'
    },
    {
        id:2,
        nombre:'la parrillada del loco'
    }
]

function buscarPlatoPorId(id){
    return new Promise((resolve, reject)=>{
        const plato = platos.find((plato)=>{return plato.id === id;});
        if (!plato) {
            const error = new Error();
            error.message = `el plato con id ${id} no ha sido encontrado`;
            reject(error);
        }
        resolve(plato);
    })
}

buscarPlatoPorId(1).then((plato)=>{
    console.log(plato);
}).catch((error)=>{
    console.log(error.message);
})

function buscarRestaurantePorId(id){
    return new Promise((resolve, reject)=>{
        const restaurante = restaurantes.find((restaurante)=>{return restaurante.id === id});
        if (!restaurante) {
            const error = new Error();
            error.message = `el restaurante con id ${id} no ha podido ser encontrado`
            reject(error);
        }
        resolve(restaurante);
    })
}

buscarRestaurantePorId(1).then((restaurante)=>{
    console.log(restaurante);
}).catch((error)=>{
    console.log(error.message);
})

