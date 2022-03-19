const API = 'http://localhost:5001/api/jobs'

//Mostrar inforación de las tarjetas
let info
const renderCards = async()=>{
    const response = await fetch(API)
    const data = await response.json()

    const infoCard =  data.reduce((acc, dat) => {
        return `${acc}
            <div class="jobs-card">
                <h2>${dat.jobPosition}</h2>
                <div class="sub-card">
               <!--<div class="tags-card"><p>${dat.fecha}</p>
               </div>-->
            </div>
                <div>
                    <div class="entity-card"><p>${dat.entity}</p></div>
                </div>

                <div>
                    <div class="tags-card"><p>${dat.tags}</p></div>
                </div>
                <div class="card-btns">
                    <button>
                    <i class="fa-regular fa-trash-can" id="btn-eliminar" ></i>
                    </button>
                    <button id="btn-editar" onclick="modalEditar('${dat.id}')">
                    <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                </div>
            </div>
      `;
      }, '');
           
    $('main-cards').innerHTML = infoCard;
    informacion = data;
}

renderCards()


//Enviar información a la API

const agregarUsuarios = async ()=>{
    const response = await fetch(API, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            jobPosition:$('puesto-agregar').value,
            entity: $('empresa-agregar').value,
            tags:$('tags-agregar').value,
            //fecha:$('fecha-agregar').value,
        }), 
      })
       const  data = await response.json()
       renderCards()
       
}

const editarUsuarios = async ()=>{
    const id = $('id-editar').value
   
    const response = await fetch(`http://localhost:5001/api/jobs/${id}`,{
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jobPosition:$('puesto-agregar').value,
            entity:$('empresa-agregar').value,
            tags:$('tags-agregar').value,
            
            //fecha:$('fecha-agregar').value,
        }), 
      })
       const  data = await response.json()
       renderCards()

}

const eliminarUsuarios = async ()=>{
    const response = await fetch(API, {
        method: 'DELETE', 
        })
       const  data = await response.json()
       renderCards()

}

const mostrarDatosEditados = async(id)=>{
    const response = await fetch(`http://localhost:5001/api/jobs/${id}`)
    const  data = await response.json()
    $('puesto-editar').value = data.jobPosition
    $('emprea-editar').value= data.entity
    $('tags-editar').value = data.tags
    $('id-editar').value = data.id
  
  
  }
