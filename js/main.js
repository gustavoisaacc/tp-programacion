const tablaListar = document.querySelector(".tabla--informacion");
const reguistro = document.querySelector(".reguistros");
const tabal = document.querySelector('.tabla-informacion');

const API = "http://localhost:3000/carreras";
const API2 = "http://localhost:3000/materias";
getCarreras(API)
async function  getCarreras(api) {
  const carreras = await axios.get(api)
  console.log(carreras.data)
  poblarSelect(carreras.data)
}

let obj = {}


const getMaterias = async ()=>  {
  const item = await fetch("http://localhost:3000/materias")
  const data = await item.json()
  return data
}

const otrafuncion = async () => {
  console.log(await getMaterias())
}

console.log(otrafuncion())


function poblarTabla() {
  const materias = getMaterias().then(res => res)
  console.log(materias)
  const div = document.createElement('div');
//   materias.forEach(materia => {
//     console.log(materia)
//  })
}
poblarTabla()


function  poblarSelect(carrera) {
  const select = document.createElement('select');
  select.classList.add('carreras')
  carrera.forEach(item => {
    const nike = item.name.slice(28,-1)
    console.log(nike)
    select.innerHTML += `
    <option value="${nike} data-set="${nike}">${item.name}</option>
    `
    reguistro.appendChild(select)
  })
}

reguistro.addEventListener('click', (e) => {
  if(e.target.className === "carreras"){
    const sele = e.target;
  sele.addEventListener('change', (e) => {
    if(sele.selectedIndex === 1){
    }
  })
 }
})
























//   <select name="" id="select">
//         <option value="">----Seleccione una Carrera--</option>
//         <option value="">Programacion</option>
//         <option value="">Mecatronica</option>
//         <option value="">Higuiene y Seguridad</option>
//       </select>
//       <section class="tabla--informacion"></section>