const{membresia}= require ('./datos.js');

 
async function buscarMenbresiaPorId(id)
{
    const membresias = membresia.find((membresias)=> membresias.id === id);
    if (!membresias)
    {
        const error = new Error();
        error.message = `El cliente con el id ${id} no se ha podido encontrar`
        throw error;

    }
    return membresias;
}


async function main ()
{
    try{
        const membresias = await buscarMenbresiaPorId(2);
        console.log(membresias);
    }catch(error){
        console.log(error.message);
    }
};

main();