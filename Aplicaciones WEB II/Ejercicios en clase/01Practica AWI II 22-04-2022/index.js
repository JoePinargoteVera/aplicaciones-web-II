const { saludar, funcion1 }  =require('./funciones')

saludar('bart');

function llamarFuncionSaludar(fn, parametro)
{
    fn(parametro);
}

llamarFuncionSaludar(saludar, "homero");


console.log(funcion1(2,5,"+")) ;

let total=0;
const iva=12;

const mostrarListado =  (tope)=>
{
    for (let i=0;i<tope;i++)
    {
        console.log(`dato actual ${i}`)
    }
}

mostrarListado(12);

