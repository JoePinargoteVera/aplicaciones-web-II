const {planes}=require('./datos.js');

// Funcion para buscar los planes por su ID
async function BuscarPlanID(id){
    const plan = planes.find((plan)=>plan.id === id);
    if(!plan){
        const error=new Error()
        error.message=`El plan no se ha podido encontar`
        throw error;
    }
    return plan;
}

//Funcion Main
async function Main ()
{
    try{
        const plan = await BuscarPlanID(1);
        console.log(plan);
    }catch(error){
        console.log(error.message);
    }
};

Main();