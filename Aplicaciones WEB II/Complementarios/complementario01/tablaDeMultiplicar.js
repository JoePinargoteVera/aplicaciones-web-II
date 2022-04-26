var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

//1.	Crear una función que reciba N como parámetro y genere la tabla de multiplicar por consola de este parámetro.
function mult(numero) {
    let resultado;
    for (let i = 0; i <= 12; i++) {
        resultado= i*parseInt(numero) ;
        console.log(`${i} * ${numero} = ${resultado}`)
    }
}

rl.question('escribe un numero ', numero => {
    mult(numero);
});

