class Comida {
    constructor(nombre, ingredientes, tipo, precio) {
        this.comidaNombre = nombre;
        this.ingredientes = [ ...ingredientes    ];
        this.tipo = tipo;
        this.precio = precio;
    }
    getComida() {
        return `${this.comidaNombre} ${this.tipo} ${this.ingredientes} ${this.precio}`;
    }
}

const ComidasFavoritas = [
     Comida1 = new Comida("encebollado", ['cebolla', "yuca"], 'plato fuerte', 2,50),
     Comida2 = new Comida("ceviche", ['pescado', "tomate"], 'plato fuerte', 2)
]
ComidasFavoritas.forEach(eat => {
    console.log(eat.getComida())
});
