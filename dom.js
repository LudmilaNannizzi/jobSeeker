const $ = (id) => document.getElementById(id)


$('btn-add').addEventListener('click', () =>{
    $('modal-bg-add-prop').classList.remove('modal-bg-add-prop-none')
    $('modal-bg-add-prop').classList.add('modal-bg-add-prop')
})

$('btn-save-add').addEventListener('click', () =>{
    $('modal-bg-add-prop').classList.add('modal-bg-add-prop-none')
    $('modal-bg-add-prop').classList.remove('modal-bg-add-prop')
    agregarUsuarios()
})

/* $('modal-bg-add-prop').addEventListener('click', ()=>{
    $('modal-bg-add-prop').classList.add('modal-bg-add-prop-none')
}) */