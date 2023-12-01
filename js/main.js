const tablaListar = document.querySelector(".tabla--informacion");
const reguistro = document.querySelector(".reguistros");
const table = document.querySelector('.tabla-informacion');
const alumnosModal = document.querySelector('#mi-modal');
const body = document.querySelector('.modal-body');
const titleModal = document.querySelector('h5');




(async function  () {
const select = document.createElement('select');
const API = "http://localhost:3000/carreras";
  const carreras = await axios.get(API)

  select.classList.add('carreras')
  select.innerHTML = "<option>----Seleccione una carrera----</option>"
  carreras.data.forEach(item => {
    select.innerHTML += `
    <option value="${item.id}">${item.nombCarrera}</option>
    `
    reguistro.appendChild(select)
  })
})()

reguistro.addEventListener('change', async (e) => {
  table.innerHTML = '';
  if(e.target.className === "carreras"){
    const div = document.createElement('div')
    const sele = e.target;
    const API = `http://localhost:3000/carreras/${sele.value}/materias`;
    const materias = await axios.get(API)
    materias.data.forEach(item => {
      div.innerHTML += `
      <p data-set=${item.id} id="title" >${item.nombMateria}</p>
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
    const API = `http://localhost:3000/materias/${id}/alumnos`;
    const alumnos = await axios.get(API)
    console.log(alumnos.data)
    alumnosModal.classList.toggle('modals')
    const p = document.createElement('div')
    titleModal.innerHTML = e.target.innerHTML
    alumnos.data.forEach(item => {
      p.innerHTML += `
        <p>${item.nombre}</p>
      `
      body.appendChild(p)
     
    })
  }
})

alumnosModal.addEventListener('click', (e)=> {
  if(e.target.className === "btn-close"){
    alumnosModal.classList.add('modals')
  }
})












//   <select name="" id="select">
//         <option value="">----Seleccione una Carrera--</option>
//         <option value="">Programacion</option>
//         <option value="">Mecatronica</option>
//         <option value="">Higuiene y Seguridad</option>
//       </select>
//       <section class="tabla--informacion"></section>