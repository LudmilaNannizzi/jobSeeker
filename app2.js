const API = 'http://localhost:5000/api/jobs'

//Mostrar inforación de las tarjetas
let info
const renderCards = async()=>{
    const response = await fetch(API)
    const data = await response.json()

    const infoCard =  data.reduce((acc, dat) => {
        return `${acc}
            <div class="jobs-card">
                <h2>${dat.puesto}</h2>
                <div class="sub-card">
                    <p>${dat.empresa}</p>
                    <div class="tags-card"><p>${dat.fecha}</p></div>
                </div>
                <div>
                    <div class="tags-card"><p>${dat.tags}</p></div>
                </div>
                <div class="card-btns">
                    <button ><i class="fa-regular fa-trash-can"></i></button>
                    <button><i class="fa-regular fa-pen-to-square"></i></button>
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
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            puesto:$('puesto-agregar').value,
            empresa: $('empresa-agregar').value,
            tags:$('tags-agregar').value,
            fecha:$('fecha-agregar').value,
        }), 
      })
       const  data = await response.json()
       renderCards()

}

const editarUsuarios = async ()=>{
    const response = await fetch(API, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            puesto:$('puesto-agregar').value,
            empresa: $('empresa-agregar').value,
            tags:$('tags-agregar').value,
            fecha:$('fecha-agregar').value,
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