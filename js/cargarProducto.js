const subcategoria = document.querySelector('.subcategoria');
const form = document.querySelector('form');


(async function  () {
  const API = "http://localhost:3000/tipo";
  const res = await axios.get(API);
  const select = document.createElement('select');
  select.classList.add('form-select')
  console.log(res.data)
  res.data.forEach(item => {
    select.innerHTML += `
    <option value="${item.id}">${item.subCategorias}</option>
    `
    subcategoria?.appendChild(select)
  })
  
  })()


  form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    
    const inputNombre = document.querySelector('.nombre')
    const inputPrecio = document.querySelector('.precio')
    const inputImagen = document.querySelector('.imagen')
    const select = document.querySelector('select')
    console.log(select.value)

    const dato = {
      "nombre": inputNombre.value,
      "precio": inputPrecio.value,
      "imagen": inputImagen.value,
      "tipoId": select.value
    }
    axios.post("http://localhost:3000/producto", dato)
  })
