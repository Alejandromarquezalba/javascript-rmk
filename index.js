
//---------------------------------------------------------------------

//Traer data de JSON, recorrer JSON mostrando cada elemento por HTML y guardar en STORAGE
fetch('./data.json')
    .then(answer=>{return answer.json()})
    .then((infojson)=>{
        const containLista = document.querySelector('.alternating-colors')
        infojson.forEach((alu)=>{
            const li = document.createElement('li')
            const strong1 = document.createElement('strong')
            const strong2 = document.createElement('strong')
            const strong3 = document.createElement('strong')
            const strong4 = document.createElement('strong')
            const strong5 = document.createElement('strong')
            const p1 = document.createElement('p')
            const p2 = document.createElement('p')
            const p3 = document.createElement('p')
            const p4 = document.createElement('p')
            const p5 = document.createElement('p')
            strong1.innerText=alu.nombre
            strong2.innerText=alu.nota_parc
            strong3.innerText=alu.nota_proj
            strong4.innerText=alu.nota_exam
            strong5.innerText=alu.notafinal
            p1.innerText='Nombre: '
            p2.innerText='Nota de Parciales(equivalente al 35% de la nota Final): '
            p3.innerText='Nota de Proyectos(equivalente al 20% de la nota Final): '
            p4.innerText='Nota de Examenes(equivalente al 45% de la nota Final): '
            p5.innerText='Nota Final: '
            p1.appendChild(strong1)
            p2.appendChild(strong2)
            p3.appendChild(strong3)
            p4.appendChild(strong4)
            p5.appendChild(strong5)
            li.appendChild(p1)
            li.appendChild(p2)
            li.appendChild(p3)
            li.appendChild(p4)
            li.appendChild(p5)
            containLista.appendChild(li)
        })
        const stringyData = JSON.stringify(infojson)
        localStorage.setItem('Alumnos',stringyData)
    })
    .catch(()=>console.log('err al traer la informacion de json'))

//Boton de prueba de JSON
const fetchjson = document.querySelector('.boton_prueba_fetchjson')

//Selectores
const containBuscar = document.querySelector('#container_search');
const containAgregar = document.querySelector('#container_add');
const lista = document.querySelector('.alternating-colors');
const errorSpace = document.querySelector('#error_space_add');
const errorSpace2 = document.querySelector('#error_space_search');
const blankspace = document.querySelector('#space_search');
const aprobados = document.querySelector('#event_aprobados');
const aprobados2 = document.querySelector('#event_aprobados2');
const aprobadosSpace = document.querySelector('#aprobados_space');
//Seleccion del valor
const valorBuscar = document.querySelector('#input_search');
const valorAgregar = document.querySelector('#input_add');
const nota1 = document.querySelector('#nota_value1');
const nota2 = document.querySelector('#nota_value2');
const nota3 = document.querySelector('#nota_value3');
const clickBuscar = document.querySelector('#button_search');
const clickAgregar = document.querySelector('#button_add');
//Variables a llenar
let alumnoValor = '';
let alumnoAgregado = '';
let nota1Valor = '';
let nota2Valor = '';
let nota3Valor = '';
let notaFValor = '';
//Eventos addEvent
aprobados.addEventListener('click', (event)=>{
    event.preventDefault();
    aprobadosSpace.innerHTML='<p></p>'
    const obtenerStorageParse1 = JSON.parse(localStorage.getItem('Alumnos'))
    const filtrado = obtenerStorageParse1.filter((aprob)=>{return aprob.notafinal>=6})
    const arrayvacio = []
    filtrado.forEach(element => {
        arrayvacio.push(element)
    });
    for(let i=0; i<arrayvacio.length;i++){
        const nuevo_txt = document.createElement('p');
        nuevo_txt.innerText = arrayvacio[i].nombre+ ` ha aprobado con una nota de `+arrayvacio[i].notafinal;
        nuevo_txt.className='aprobados_css'
        aprobadosSpace.appendChild(nuevo_txt);
    }
})
aprobados2.addEventListener('click', (event)=>{
    event.preventDefault();
    aprobadosSpace.innerHTML='<p></p>'
})

nota1.addEventListener('input', (event)=>{
    nota1Valor = parseFloat(event.target.value)
})
nota2.addEventListener('input', (event)=>{
    nota2Valor = parseFloat(event.target.value)
})
nota3.addEventListener('input', (event)=>{
    nota3Valor = parseFloat(event.target.value)
})
valorBuscar.addEventListener('input', (event)=>{
    alumnoValor = event.target.value
})
clickBuscar.addEventListener('click', (event)=>{
    event.preventDefault();
    const buscarEnLocal = localStorage.getItem('Alumnos')
    const convertirLocal = JSON.parse(buscarEnLocal);
    const buscarEstudiante = convertirLocal.some((alumno)=>alumno.nombre===alumnoValor)
    console.log(buscarEstudiante)
        if(buscarEstudiante){
            Swal.fire({
                title: "Busqueda exitosa",
                text: "Se ha encontrado inscripto el alumno: "+alumnoValor,
                icon: "success"
              });
        } else {
            Swal.fire({
                title: "Sin resultados",
                text: "No se ha encontrado al alumno: "+ alumnoValor,
                icon: "question"
              });
        }
})
valorAgregar.addEventListener('input',(event)=>{
    alumnoAgregado = event.target.value;
})
clickAgregar.addEventListener('click',(event)=>{
    event.preventDefault();
    if(/^[A-Za-z\s]+$/.test(alumnoAgregado.trim()) && nota1Valor && nota2Valor && nota3Valor && nota1Valor>0 && nota1Valor<=10 && nota2Valor>0 && nota2Valor<=10 && nota3Valor>0 && nota3Valor<=10)
        {
        Swal.fire(alumnoAgregado+" ha sido agregado!");
            const toFixed = nota1Valor*0.35+nota2Valor*0.20+nota3Valor*0.45
            const notaFValor = toFixed.toFixed(2)
        //Creacion de nodo
        const li = document.createElement('li')
            const strong1 = document.createElement('strong')
            const strong2 = document.createElement('strong')
            const strong3 = document.createElement('strong')
            const strong4 = document.createElement('strong')
            const strong5 = document.createElement('strong')
            const p1 = document.createElement('p')
            const p2 = document.createElement('p')
            const p3 = document.createElement('p')
            const p4 = document.createElement('p')
            const p5 = document.createElement('p')
            strong1.innerText=alumnoAgregado
            strong2.innerText=nota1Valor
            strong3.innerText=nota2Valor
            strong4.innerText=nota3Valor
            strong5.innerText=notaFValor;
            p1.innerText='Nombre: '
            p2.innerText='Nota de Parciales(equivalente al 35% de la nota Final): '
            p3.innerText='Nota de Proyectos(equivalente al 20% de la nota Final): '
            p4.innerText='Nota de Examenes(equivalente al 45% de la nota Final): '
            p5.innerText='Nota de Final: '
            p1.appendChild(strong1)
            p2.appendChild(strong2)
            p3.appendChild(strong3)
            p4.appendChild(strong4)
            p5.appendChild(strong5)
            li.appendChild(p1)
            li.appendChild(p2)
            li.appendChild(p3)
            li.appendChild(p4)
            li.appendChild(p5)
            lista.appendChild(li)
            li.appendChild(borrarAlumnoBtn());
        //Guardado de info en el storage
        const nuevainfo = {nombre: alumnoAgregado, nota_parc: nota1Valor, nota_proj: nota2Valor, nota_exam: nota3Valor, notafinal: notaFValor}
        const obtenerStorageParse = JSON.parse(localStorage.getItem('Alumnos'))
        obtenerStorageParse.push(nuevainfo);
        localStorage.setItem('Alumnos',JSON.stringify(obtenerStorageParse))
        console.log('hurra, existes')
        console.log(obtenerStorageParse)
    }else{
        Swal.fire({
            title: "Datos invalidos",
            text: "Los datos proporcionados son incorrectos, asegurese todos los espacios estén llenos, el nombre no debe tener caracteres especiales ni números y las notas deben ser mayor a 0 hasta un máximo de 10",
            icon: "error"
          });
    }
})
function borrarAlumnoBtn (){
    const botonDeBorrar = document.createElement('button');
    botonDeBorrar.textContent = 'Remover alumno';
    botonDeBorrar.className = 'btn_borrar';
    botonDeBorrar.addEventListener('click', (element)=>{
        const obtenerStorageParse2 = JSON.parse(localStorage.getItem('Alumnos'))

        obtenerStorageParse2.pop();

        localStorage.setItem('Alumnos',JSON.stringify(obtenerStorageParse2))
        const item = element.target.parentElement;
        lista.removeChild(item);
    })
    return botonDeBorrar;
}





