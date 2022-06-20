const {clientes} = require ('./datos.js');

// console.log(clientes);   


async function buscarClientePorId(id)
{
    const cliente = clientes.find((cliente)=> cliente.id === id);
    if (!cliente)
    {
        const error = new Error();
        error.message = `El cliente con el id ${id} no se ha podido encontrar`
        throw error;

    }
    return cliente;
}

// en caso de buscar un cliente por el id de la membresia
// crear la funcion
async function buscarCLientePorIdMenbresia (id)
{

}


async function main ()
{
    try{
        const cliente = await buscarClientePorId(1);
        console.log(cliente);
    }catch(error){
        console.log(error.message);
    }
};

main();
