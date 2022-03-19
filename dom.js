const $ = (id) => document.getElementById(id)

const modalEditar =(id)=>{
    $('modal-bg-edit-prop').classList.remove('modal-bg-add-prop-none')
    $('modal-bg-edit-prop').classList.add('modal-body-add-prop')
    mostrarDatosEditados(id)

}

$('btn-add').addEventListener('click', () =>{
    $('modal-bg-add-prop').classList.remove('modal-bg-add-prop-none')
    $('modal-bg-add-prop').classList.add('modal-bg-add-prop')
})

$('btn-save-add').addEventListener('click', () =>{
    $('modal-bg-add-prop').classList.add('modal-bg-add-prop-none')
    $('modal-bg-add-prop').classList.remove('modal-bg-add-prop')
    agregarUsuarios()
})


$('btn-save-close').addEventListener('click', ()=>{
    $('modal-bg-add-prop').classList.add('modal-bg-add-prop-none')
})

$('btn-save').addEventListener('click', ()=>{
    editarUsuarios()
    $('modal-bg-edit-prop').classList.add('modal-bg-add-prop-none')
})
