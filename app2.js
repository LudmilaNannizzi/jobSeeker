
//Mostrar inforación de las tarjetas
let info
const rednderCards = async()=>{
    const response = await fetch('https://622bc30a087e0e041efbb85d.mockapi.io/api/jobs')
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

rednderCards()

//Mostrar info en los inputs
/* const datosInput = async (id)=>{
    const response = await fetch(`https://622bc30a087e0e041efbb85d.mockapi.io/api/jobs/${id}`)
    const data = await response.json()




} */

//Enviar información a la API

const agregarUsuarios = async ()=>{
    const response = await fetch('https://622bc30a087e0e041efbb85d.mockapi.io/api/jobs', {
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
       rednderCards()

}