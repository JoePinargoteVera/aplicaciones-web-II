const {gym}=require('./datos.js');

async function BuscarGimnasios(id){
    const gimnasios = gym.find((gimnasios)=> gimnasios.id === id);
    if(!gimnasios){
        const error=new Error()
        error.message=`El gymnasio no se ha podido encontar`
        throw error;
    }
    return gimnasios;
}

async function Main ()
{
    try{
        const gimnasios = await BuscarGimnasios(1);
        console.log(gimnasios);
    }catch(error){
        console.log(error.message);
    }
};

Main();