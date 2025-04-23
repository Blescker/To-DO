const btnTask = document.querySelector('.btn-task')
const dialog = document.querySelector('.dialog')
const formulario = document.querySelector('.formulario')
const cerrarDialog = document.querySelector('.cerrar-dialog')
const contenedorTask = document.querySelector('.contenedor-task')
const cardCreate = document.querySelector('card')

btnTask.addEventListener('click', () =>{
    dialog.showModal();
});

cerrarDialog.addEventListener('click',() =>{
    dialog.close();
})
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    const nombre = document.querySelector('.nombre-tarea').value;
    const categoria = document.querySelector('.categoria-Tarea').value;
    const prioridad = document.querySelector('.prioridad-Tarea').value;
    console.log({nombre,categoria,prioridad})
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
        <h4>${nombre}</h4>
        <p><strong>Categoria:</strong> ${categoria}</p>
        <p><strong>Prioridad:</strong> <span class="${prioridad.toLowerCase()}">${prioridad}</span></p>
        <button class="completar-tarea">✔</button>
        <button class="eliminar-tarea">🗑️</button>
    `
    contenedorTask.appendChild(card);

    formulario.reset();   

    dialog.close();

    
})
contenedorTask.addEventListener('click',(e) =>{
    const card = e.target.closest('.card')
    if(e.target.classList.contains('completar-tarea')){
        card.classList.toggle('completada')
    }
    if(e.target.classList.contains('eliminar-tarea')){
        card.remove()
    }
})



