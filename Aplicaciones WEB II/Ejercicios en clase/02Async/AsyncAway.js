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

async function buscarPlatoPorId(id) {
    const plato = platos.find((plato)=> plato.id === id);
    if (!plato) {
        const error = new Error();
        error.message = `El plato con id ${id} no pudo ser encontrado`;
        throw error;
    }
    return plato;
}
async function buscarRestaurantePorId(id){
    const restaurante = restaurantes.find((restaurante)=> restaurante.id===id);
    if (!restaurante) {
        const error = new Error();
        error.message = `El restaurante con id ${id} no pudo ser encontrado`;
        throw error;
    }
    return restaurante;
}
async function main() {
    try {
        const plato = await buscarPlatoPorId(5);
        const restaurante = await buscarRestaurantePorId(plato.idrestaurante);
        delete plato.idrestaurante;
        plato.restaurante = restaurante;
        console.log(plato);
    } catch (error) {
        console.log(error.message);
    }
    
}

main();