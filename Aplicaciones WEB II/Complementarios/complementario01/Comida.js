//2.	Crear un objeto Comida que tenga como parámetros: nombre, ingredientes, tipo (ensalada, plato fuerte, entrada, etc.)
//      y cualquier otro atributo que considere importante para su diseño.
class Comida {
    constructor(nombre, ingredientes, tipo, precio) {
        this.comidaNombre = nombre;
        this.ingredientes =ingredientes   ;
        this.tipo = tipo;
        this.precio = precio;
    }
    getComida() {
        return ` ${this.comidaNombre} ${this.tipo}  ${this.ingredientes} ${this.precio}`;
    }
    getBetterComida() {
        return ` 
        nombre: ${this.comidaNombre} 
        tipo de plato: ${this.tipo} 
        ingredientes principales: ${this.ingredientes} 
        precio: ${this.precio}`;
    }
}
//3.	Definir un arreglo con sus comidas favoritas, teniendo como base el objeto del punto anterior.
const ComidasFavoritas = [
     Comida1 = new Comida("encebollado", ["cebolla", "yuca"], 'plato fuerte', '2,50'),
     Comida2 = new Comida("ceviche", ["pescado", "tomate"], 'plato fuerte', '2')
]

//4.	Recorrer el arreglo definido en la opción anterior y mostrarlo aplicando 4 estructuras de repetición.
//1. foreach
function porForeach(ComidasFavoritasx) {
    ComidasFavoritas.forEach(ComidasFavoritasx => {
        console.log(ComidasFavoritasx.getComida())
    });
}
//porForeach(ComidasFavoritas);

//2. DoWhile
function porDoWhile(ComidasFavoritasx){
    let j =0;
    do {
        let elemento = ComidasFavoritasx[j];
        console.log(elemento.getComida())
    j++;
    } while (j < ComidasFavoritasx.length);
}

//3.while
//porDoWhile(ComidasFavoritas);

function porWhile(ComidasFavoritasx) 
{
    let i = 0;
    while (i < ComidasFavoritasx.length) {
    
    let element = ComidasFavoritasx[i];
    console.log(element.getComida())
    i++;
    }
}
//porWhile(ComidasFavoritas);

//4. for
function porFor(ComidasFavoritasx) {
    for (let i = 0; i < ComidasFavoritasx.length; i++) {
        let element = ComidasFavoritasx[i];
        console.log(element.getComida())
        
    }    
}
//porFor(ComidasFavoritas);

//5.	Crear una función flecha que reciba un arreglo de comidas y 
//      lo devuelva en mayúsculas y mejoras en su formato de presentación.

const Amayusculas = (comidas)=>{
    for (let i = 0; i < comidas.length; i++) {
        let element = comidas[i];
        console.log(element.getBetterComida().toUpperCase())
        
    }
}

Amayusculas(ComidasFavoritas)