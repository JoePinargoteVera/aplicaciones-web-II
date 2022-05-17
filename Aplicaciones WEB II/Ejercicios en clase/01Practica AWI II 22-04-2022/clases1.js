const persona = 
{
    nombre:"joe",
    apellido:"pinargote",
    esEstudiante:false,
    geolocalizacion:{
        lat:123.232,
        lng:23.234234,
    },
    getNombreCompleto: ()=>{
        return `${this.nombre} ${this.apellido}`
    }
}

    this.nombre="manuel";
    this.apellido="vera";

 console.log(persona.getNombreCompleto())

function mostrarDatos({ nombre, apellido, geolocalizacion:{ lat,lng }, getNombreCompleto })
{
    
    console.log(nombre)
    console.log(apellido)
    console.log(lat)
    console.log(lng)
    console.log(getNombreCompleto())
    
}
    
mostrarDatos(persona)

