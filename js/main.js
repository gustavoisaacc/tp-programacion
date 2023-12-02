const tablaListar = document.querySelector(".tabla--informacion");
const reguistro = document.querySelector(".reguistros");
const table = document.querySelector('.tabla-informacion');
const productoModal = document.querySelector('#mi-modal');
const body = document.querySelector('.modal-body');
const titleModal = document.querySelector('h5');




(async function  () {
const select = document.createElement('select');
const API = "http://localhost:3000/categorias";
  const carreras = await axios.get(API)

  select.classList.add('carreras')
  select.innerHTML = "<option>----Seleccione una Categoria----</option>"
  carreras.data.forEach(item => {
    select.innerHTML += `
    <option value="${item.id}">${item.categoria}</option>
    `
    reguistro.appendChild(select)
  })
})()

reguistro.addEventListener('change', async (e) => {
  table.innerHTML = '';
  if(e.target.className === "carreras"){
    const div = document.createElement('div')
    const sele = e.target;
    const API = `http://localhost:3000/categorias/${sele.value}/tipo`;
    const materias = await axios.get(API)
    materias.data.forEach(item => {
      div.innerHTML += `
      <p data-set=${item.id} id="title" >${item.subCategorias}</p>
    `
    table.appendChild(div)
  })
 
 }
})
const menu  = document.querySelector(".menu--container");

table.addEventListener('click',async (e) => {
  body.innerHTML = ""
  if(e.target.id === "title"){
    const target = e.target
    const id = target.dataset.set
    console.log(id)
    const API = `http://localhost:3000/tipo/${id}/producto`;
    const producto = await axios.get(API)
    console.log(producto.data)
    productoModal.classList.toggle('modals')
    const div = document.createElement('div')
    div.classList.add('card--css')
    titleModal.innerHTML = e.target.innerHTML
    producto.data.forEach(item => {
      div.innerHTML += `
      <div class="card">
        <img src="${item.imagen}" alt="imagen del producto" loading="lazy" style="opacity: 1;">
        <div class="card-body">
          <h5 class="card-title">${item.nombre}</h5>
          <h5 class="card-title">$${item.precio}</h5>
          <a href="#" class="btn btn-primary">ver</a>
        </div>
      </div>
      `
      body.appendChild(div)
     
    })
  }
})

productoModal.addEventListener('click', (e)=> {
  if(e.target.className === "btn-close"){
    productoModal.classList.add('modals')
  }
})












//   <select name="" id="select">
//         <option value="">----Seleccione una Carrera--</option>
//         <option value="">Programacion</option>
//         <option value="">Mecatronica</option>
//         <option value="">Higuiene y Seguridad</option>
//       </select>
//       <section class="tabla--informacion"></section>