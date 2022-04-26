class Comida {
    constructor(nombre, ingredientes, tipo, precio) {
        this.comidaNombre = nombre;
        this.ingredientes = [ ...ingredientes    ];
        this.tipo = tipo;
        this.precio = precio;
    }
    getComida() {
        return `el ${this.comidaNombre} es un ${this.tipo} que tiene como principales ingredientes: ${this.ingredientes} y cuyo precio es: ${this.precio}`;
    }
}

const ComidasFavoritas = [
     Comida1 = new Comida("encebollado", ['cebolla', "yuca"], 'plato fuerte', '2,50'),
     Comida2 = new Comida("ceviche", ['pescado', "tomate"], 'plato fuerte', '2')
]
// ComidasFavoritas.forEach(comida => {
//     console.log(comida.getComida())
// });

// let j =0;
// do {
//     let element = ComidasFavoritas[j];
//     console.log(element.getComida())
//     j++;
// } while (j < ComidasFavoritas.length);

// let i = 0;
// while (i < ComidasFavoritas.length) {
    
//     let element = ComidasFavoritas[i];
//     console.log(element.getComida())
//     i++;
// }

// for (let i = 0; i < ComidasFavoritas.length; i++) {
//     let element = ComidasFavoritas[i];
//     console.log(element.getComida())
    
// }

const Amayusculas = (comidas)=>{
    comidas.forEach(comida => {
        console.log(comida.toUpperCase())
    });
}

Amayusculas(ComidasFavoritas)