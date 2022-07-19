import './style.css'
import axios from 'axios'
import { IResCliente, Cliente } from './interfaces/ICliente';

const httpAxios =  axios.create({
  baseURL:'http://localhost:4000/v2/cliente/api/clientes/',
})

const app = document.querySelector<HTMLDivElement>('#app')!

const etiqueta = document.createElement("label")
etiqueta.textContent="Identificador"
const input = document.createElement("input");
input.id="id"
etiqueta.htmlFor="id"
app.appendChild(etiqueta);
app.appendChild(input);
app.innerHTML += `
<label for ="nombre">Nombre</label><input id="nombre"/>
<label for ="estado">Estado</label><input id="estado"/>
<label for ="apellido">Apellido</label><input id="apellido"/>
<label for ="telefono">Telefono</label><input id="telefono"/>
<label for ="direccion">Direccion</label><input id="direccion"/>
<label for ="cedula">Cedula</label><input id="cedula"/>
<button id="nuevo" >Nuevo</button>
<button id="grabar" >Grabar</button>
<button id="consultar" >Consultar</button>
<button id="consultarid" >Consulta por id</button>
<button id="eliminar" >Eliminar</button>
<div id="cuerpo"/>
`
const nuevo = document.querySelector<HTMLButtonElement>('#nuevo')!
const grabar = document.querySelector<HTMLButtonElement>('#grabar')!
const consultar = document.querySelector<HTMLButtonElement>('#consultar')!
const consultarid = document.querySelector<HTMLButtonElement>('#consultarid')!
const eliminar = document.querySelector<HTMLButtonElement>('#eliminar')!

const id = document.querySelector<HTMLInputElement>('#id')!
const nombre = document.querySelector<HTMLInputElement>('#nombre')!
const estado = document.querySelector<HTMLInputElement>('#estado')!
const cedula = document.querySelector<HTMLInputElement>('#cedula')!
const apellido = document.querySelector<HTMLInputElement>('#apellido')!
const telefono = document.querySelector<HTMLInputElement>('#telefono')!
const direccion = document.querySelector<HTMLInputElement>('#direccion')!

const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!

nuevo.addEventListener('click',()=>{
  nombre.value=""
  estado.value=""
  cedula.value=""
  apellido.value=""
  telefono.value=""
  direccion.value=""
  id.value=""
})

consultar.addEventListener('click', async ()=>{
  const respclientes:IResCliente 
  =  await (await httpAxios.get<IResCliente>('clientes')).data;

    const tabla   = document.createElement("table")
    tabla.id="tabla"
    tabla.border="1"


    
    const { clientes } = respclientes;

    for (const cliente of clientes)
    {
      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${cliente._id}" >${cliente.nombre}</button>`
      const celda2= row.insertCell()
      celda2.innerHTML=`${cliente._id}`
    }
    
    cuerpo.innerHTML=``
    cuerpo.appendChild(tabla)
    document.querySelectorAll('.boton').forEach((ele:Element)=>{
      ele.addEventListener('click', async ()=>{
          const idx= (ele as HTMLButtonElement).value;
          const cliente:Cliente 
          =  await (await httpAxios.get<Cliente>(`cliente${idx}`)).data;
          nombre.value= cliente.nombre;          
          cedula.value= cliente.cedula.toString();  
          apellido.value= cliente.apellido.toString();  
          telefono.value= cliente.telefono.toString();  
          direccion.value= cliente.direccion.toString();  
          estado.value= cliente.estado!.toString();  
          id.value= cliente._id!;  
           
      })
    })
})

grabar.addEventListener('click',async ()=>{
  const data:Cliente = {
    nombre: String(nombre.value),
    apellido: String( apellido.value),
    cedula: String( cedula.value),
    telefono: String( telefono.value),
    direccion: String( direccion.value),

  }
  if (id.value.trim().length>0 )
  {

    const resp: Cliente = await (await httpAxios.put<Cliente>(`actualizar/cliente${id.value}`)).data
    console.log(`El cliente ${resp.nombre} fue modificado con éxito`);
    return;
  }
  try {
    const resp: Cliente =  await (await httpAxios.post<Cliente>(`nuevo/cliente`, data)).data
    console.log(`El cliente ${resp.nombre} fue grabado con éxito`);
  } catch (error) {
    if ( axios.isAxiosError(error)  )
    {
      console.log(error );
      
    }
    
  }
  
})

eliminar.addEventListener('click',async ()=>{

  try {
    if (id.value.trim().length>0 )
  {
    const resp: Cliente = await (await httpAxios.delete<Cliente>(`eliminar/cliente${id.value}`)).data
    console.log(`El cliente ${resp.nombre} fue eliminado con éxito`);
    return;
  }else{
    console.log('no hay cliente que eliminar')
  }
  } catch (error) {
    if ( axios.isAxiosError(error)  )
    {
      console.log(error );
      
    }
  }
})

consultarid.addEventListener('click', async ()=>{
  const cliente:Cliente 
  =  await (await httpAxios.get<Cliente>(`cliente${id.value}`)).data;

    const tabla   = document.createElement("table")
    tabla.id="tabla"
    tabla.border="1"

      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${cliente._id}" >${cliente.nombre}</button>`
      const celda2= row.insertCell()
      celda2.innerHTML=`${cliente._id}`
    
    
    cuerpo.innerHTML=``
    cuerpo.appendChild(tabla)
    document.querySelectorAll('.boton').forEach((ele:Element)=>{
      ele.addEventListener('click', async ()=>{
          const idx= (ele as HTMLButtonElement).value;
          const cliente:Cliente 
          =  await (await httpAxios.get<Cliente>(`cliente${idx}`)).data;
          nombre.value= cliente.nombre;          
          cedula.value= cliente.cedula.toString();  
          apellido.value= cliente.apellido.toString();  
          telefono.value= cliente.telefono.toString();  
          direccion.value= cliente.direccion.toString();  
          estado.value= cliente.estado!.toString();  
          id.value= cliente._id!;  
           
      })
    })
})
