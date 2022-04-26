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

function buscarPlatoPorId(id, callback)
{
    const plato = platos.find((plato)=>plato.id === id);
    if (!plato) {
        const error = new Error();
        error.message = `el plato con id ${id} no pudo ser encontrado`;
        return callback(error);
    }
    return callback(null, plato);
}

function buscarRestaurantePorId(id, callback)
{
    const restaurante = restaurantes.find((restaurante)=>restaurante.id === id);
    if (!restaurante) {
        const error = new Error();
        error.message = `el restaurante con id ${id} no pudo ser encontrado`;
        return callback(error);
    }
    return callback(null, restaurante);
}
// buscarPlatoPorId(123, (err, plato)=>{
//     if (err) {
//         console.log(err.message);
//         return;
//     }
//     console.log(plato);
// })

buscarRestaurantePorId(3, (err, restaurante)=>{
    if (err) {
        console.log(err.message); 
        return;       
    }
    console.log(restaurante);
});