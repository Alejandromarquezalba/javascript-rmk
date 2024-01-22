const alumnos = [
    {nombre: 'Wachimingo', nota_parc: 10, nota_proj: 10, nota_exam: 10, notafinal: 10},
    {nombre: 'Armando Esteban Quito', nota_parc: 8, nota_proj: 7, nota_exam: 9, notafinal: 8.25}, {nombre: 'El Brashan', nota_parc: 2, nota_proj: 3, nota_exam: 1, notafinal: 1.75}]
//Local storage
const alumnosStringy = JSON.stringify(alumnos);
localStorage.setItem('Alumnos',alumnosStringy);

const getAlumnos = localStorage.getItem('Alumnos');
const alumnosParse = JSON.parse(getAlumnos)

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
//Mensaje de que no se encontró al buscar o que no se pudo agregar:
const noSeEncontro = document.createElement('p');
const nombreEncontrado = localStorage.getItem('Pepito');
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
    nota1Valor = event.target.value
})
nota2.addEventListener('input', (event)=>{
    nota2Valor = event.target.value
})
nota3.addEventListener('input', (event)=>{
    nota3Valor = event.target.value
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
            errorSpace2.innerHTML='<p></p>'
            blankspace.innerHTML='<p>El Alumno: '+alumnoValor+' si se encuentra actualmente inscripto</p>';
            blankspace.className='find_css'
        } else {
            blankspace.innerHTML='<p></p>'
            errorSpace2.innerHTML='<p>No se ha encontrado al Alumno o el nombre es invalido</p>'
            errorSpace2.className='error_css'
            console.log('error en el ELSE del click BUSCAR')
        }
})
valorAgregar.addEventListener('input',(event)=>{
    alumnoAgregado = event.target.value;
})
clickAgregar.addEventListener('click',(event)=>{
    event.preventDefault();
    
    if(alumnoAgregado && nota1Valor && nota2Valor && nota3Valor && nota1Valor>=0 && nota1Valor<=10 && nota2Valor>=0 && nota2Valor<=10 && nota3Valor>=0 && nota1Valor<=10)
        {
        errorSpace.remove();
        //Creacion de nodo
        let nuevo_li = document.createElement('li');
        let nuevo_strong = document.createElement('strong');
        let nuevo_p = document.createElement('p');
        let nuevo_strong2 = document.createElement('strong');
        let nuevo_p2 = document.createElement('p');
        let nuevo_strong3 = document.createElement('strong');
        let nuevo_p3 = document.createElement('p');
        let nuevo_strong4 = document.createElement('strong');
        let nuevo_p4 = document.createElement('p');
        let nuevo_strong5 = document.createElement('strong');
        let nuevo_p5 = document.createElement('p');
        //Creacion de texto del nodo
        nuevo_strong.innerText = 'Nombre: ';
        nuevo_p.innerText = alumnoAgregado;
        nuevo_strong2.innerText = 'Nota de Parciales(equivalente al 35% de la nota Final): ';
        nuevo_p2.innerText = nota1Valor;
        nuevo_strong3.innerText = 'Nota de Proyectos(equivalente al 20% de la nota Final): ';
        nuevo_p3.innerText = nota2Valor;
        nuevo_strong4.innerText = 'Nota de Examenes(equivalente al 45% de la nota Final): ';
        nuevo_p4.innerText = nota3Valor;
        nuevo_strong5.innerText = 'Nota Final: ';
        nuevo_p5.innerText = nota1Valor*0.35+nota2Valor*0.20+nota3Valor*0.45;
        notaFValor = nota1Valor*0.35+nota2Valor*0.20+nota3Valor*0.45;
        //Incorporacion de etiquetas a otras
        nuevo_li.appendChild(nuevo_strong);
        nuevo_li.appendChild(nuevo_p);
        nuevo_li.appendChild(nuevo_strong2);
        nuevo_li.appendChild(nuevo_p2);
        nuevo_li.appendChild(nuevo_strong3);
        nuevo_li.appendChild(nuevo_p3);
        nuevo_li.appendChild(nuevo_strong4);
        nuevo_li.appendChild(nuevo_p4);
        nuevo_li.appendChild(nuevo_strong5);
        nuevo_li.appendChild(nuevo_p5);
        nuevo_li.appendChild(borrarAlumnoBtn());
        lista.appendChild(nuevo_li);
        //Guardado de info en el storage
        const nuevainfo = {nombre: alumnoAgregado, nota_parc: nota1Valor, nota_proj: nota2Valor, nota_exam: nota3Valor, notafinal: notaFValor}
        const obtenerStorageParse = JSON.parse(localStorage.getItem('Alumnos'))
        obtenerStorageParse.push(nuevainfo);
        localStorage.setItem('Alumnos',JSON.stringify(obtenerStorageParse))
        console.log('hurra, existes')
        console.log(obtenerStorageParse)
    }else{
        errorSpace.innerHTML = '<p>Error, por favor coloque valores validos</p>'
        errorSpace.className = 'error_css'
        console.log('error')
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








