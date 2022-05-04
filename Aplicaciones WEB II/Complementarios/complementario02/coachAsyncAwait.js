const {coaches}=require('./datos.js');

async function BuscarcoachPorID(id){
    const coach = coaches.find((coach)=>coach.idCoach === id);
    if(!coach){
        const error=new Error()
        error.message=`El coach con id ${id} no ha podido ser encontrado`
        throw error;
    }
    return coach;
}

async function Main ()
{
    try{
        const coach = await BuscarcoachPorID(1);
        console.log(coach);
    }catch(error){
        console.log(error.message);
    }
};

Main();