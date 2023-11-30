(async function(){
    const carreras = await axios.get("http://localhost:3000/carreras")
    console.log(carreras.data[1].nombCarrera)
    let cadena = ""
    for (let i=0; i<carreras.data.length; i++){
        cadena += `<option value=${carreras.data[i].id}>${carreras.data[i].nombCarrera}</option>`
    }
    document.getElementById("car").innerHTML=cadena
})()

async function mostrarMaterias(){
    const idCarrera = document.getElementById("car").value
    console.log(idCarrera)
    const materias = await axios.get(`http://localhost:3000/carreras/${idCarrera}/materias`)
    console.log(materias.data)
    let listadoMaterias = ""
    materias.data.forEach(materia => {
        listadoMaterias += materia.nombMateria+"<br>"
    })
    document.getElementById("lis").innerHTML = listadoMaterias
}