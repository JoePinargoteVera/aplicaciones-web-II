var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

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

