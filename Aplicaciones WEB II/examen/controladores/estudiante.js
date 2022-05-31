const {response }= require('express');
const Estudiante = require('../modelos/estudiante')

const Estudiantes = [
    {nombre:"homero simpson",nota1:"10", nota2:"9"},
    {nombre:"lisa simpson", nota1}
]

const promedioEstudiante = async (req, res = response)=>{
    const {...body} = req.body;
    const resultado = new Estudiantes(body);
    const resultadoPromedio = await resultado.save();
    const mejorPromedio = {}
    body.forEach(resul => {
    const promedio = (resul.nota1 + resul.nota2)/2;
    
    });
    res.json(resultadoPromedio);
}
const estadoEstudiantes = async (req, res= response)=>{
    const {...body}= req.body;
    if ((body.nota1+body.nota2)/2 < 8 ) {
        
    }else if ((body.nota1+body.nota2)/2 >= 8 && (body.nota1+body.nota2)/2 < 14){

    }else if ((body.nota1+body.nota2)/2 >= 14){
        
    }
    const estado = new Estudiantes(body);
    const estadoEstudiante = await estado.save();
    res.json(estadoEstudiante);
}

module.exports = {
    estadoEstudiantes, 
    promedioEstudiante
}