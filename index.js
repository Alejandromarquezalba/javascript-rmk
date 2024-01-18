/*
---------CLASE 3-----------
let cargamento = prompt('Dame el objeto 1').trim();
let cargamento2 = prompt('Dame el objeto 2').trim();
let cargamento3 = prompt('Dame el objeto 3').trim();
let cargamento4 = prompt('Dame el objeto 4').trim();

if (cargamento=='' || cargamento2=='' || cargamento3=='' || cargamento4==''){
    console.log('Error, un producto es un espacio');
} else if(cargamento==null || cargamento2==null || cargamento3==null || cargamento4==null){
    console.log('Error, calcelaste algun producto')
} else{
    console.log('En el almacen tenemos '+ cargamento + ', ' + cargamento2 + ', ' + cargamento3 + ', ' + cargamento4)
};

let producto1 = prompt('INGRESAR 1er PRODUCTO');
let producto2 = prompt('INGRESAR 2do PRODUCTO');
let producto3 = prompt('INGRESAR 3er PRODUCTO');
let producto4 = prompt('INGRESAR 4to PRODUCTOo');

if (producto1 !='' && producto2 !='' && producto3 !='' && producto4 !=''){
    let heladera = '1) '+ producto1 + '' + '2) '+producto2 + ' '+ '3) '+ producto3+' '+ '4) ' + producto4;
    console.log(heladera);
} else {
    console.log('ERROR: ES NECESARIO CARGAR TODOS LOS PRODUCTOS')
};
------------------------------
function peperoni(param1,param2,param3){

}



const funcionAnonima = function(para1,para2,para3){

}


const funcionFlecha = (p1,p2,p3)=>{
    console.log('Hola')
}
----------------------------------------
------primer preentrega------
function calcularnotas (nombre, nota1, nota2, nota3){
    let nombrefix = nombre.trim();
    let operacion = nota1*0.35+nota2*0.20+nota3*0.45;
    let operacion2 = parseInt(operacion);

    //invalidar nota
    if(nota1>10 || nota1<0 || nota2>10 || nota2<0 || nota3>10 || nota3<0 || nota1==null || nota2==null || nota3==null || nota1=='' || nota2=='' || nota3==''){
        console.log('Error, notas invalidas')
    //invalidar nombre
    } else if(nombrefix==null || nombrefix=='' || nombrefix==' ' || nombrefix>0 || nombrefix<=0){
        console.log('Error, nombre invalido')
    //invalidar 
    } else if(operacion2>0 || operacion2<=0){
        console.log('La nota promedio de '+nombrefix+' es de: '+operacion);
    //todo correcto
    }
    else{
        console.log('Error, introdujiste un caracter invalido en vez de número');
    }
}

alert('Calculador de notas promedio');
calcularnotas(prompt('Nombre del alumno'),prompt('Del 1 al 10, cual es la nota en Parciales'),prompt('Del 1 al 10, cual es la nota en Proyectos'),prompt('Del 1 al 10, cual es la nota en Examenes'));

--------------------
class bolsa{ 
    constructor(nombre,apellido,edad){
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad
    }
    hablar(mensaje){
        console.log(mensaje+'HOLA'+this.nombre)
    }
}


let consorcio = new bolsa('Jorge','Mamamani',20);


consorcio.hablar('Hola');
*/

/*
const persona1 = {
    nombre: 'Ronan',
    apellido: 'Pendragon'
}

const persona2 = {
    nombre: 'Gorgos',
    apellido: 'Stonehoof'
}

const persona3 = {
    nombre: 'Zegga',
    apellido: 'Windwalk',
    ataque: 'bola de energía'
}

const personas = [persona1, persona2, persona3]
const sucesion = ['Un patito', 'Dos patitos', 'Tres patitos', 'Cuatro patitos']

/*
for(let i=0; i<personas.length; i++){
    console.log(personas[i])
}
*/

/*
let whilecontador = 0

while(whilecontador<=10){
    console.log(whilecontador)
    whilecontador++;
}


let dowhilecontador = 0
console.log('dowhilecontador está en 0')

do{
    dowhilecontador++;
    console.log('dowhilecontador terminó DO y quedó en 1');
}
while(dowhilecontador==1){
    console.log('dowhilecontador entró al while y se le sumó otro');
    dowhilecontador++;
    console.log('El valor actual del contador es '+dowhilecontador);
}
*/
/*
const arraynum = [1,2,3,4,5];
const profesor = {
    nombre: 'Armando Esteban',
    apellido: 'Quito',
}
const arrayej = [
    {
        nombre: 'Fulano',
        nota: 8,
    },
    {
        nombre: 'Mengano',
        nota: 5,
    },
    {
        nombre: 'Sultano',
        nota: 7,
    }
]

function validarNombre(nombre) {
    expresion = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    if(expresion.test(nombre)) {
      return true; 
    } else {
      return false; 
    }
}

let firstchoise = prompt('¡Bienvenido!, Obtener el promedio de notas? \n Si \n No').toLowerCase();

switch (firstchoise) {
    case 'si':
        choise = firstchoise;
        while(choise == 'si' ){
            switch(choise){
                case 'si': 
                const calculador = function(nombre, nota1, nota2, nota3){
                    let nombrefix = nombre.trim(); 
                    let operacion = nota1*0.35+nota2*0.20+nota3*0.45;
                    
                    if (!isNaN(nota1.trim()) && nota1.trim() !== "" && nota2.trim() && nota2.trim() !== "" && nota3.trim() && nota3.trim() !== "" && nota1>=0 && nota1<=10 && nota2>=0 && nota2<=10 && nota3>=0 && nota3<=10 && validarNombre(nombrefix) && nombrefix!=null){
                        //Validación CORRACTA
                        arrayej.push({nombre: nombre, nota: operacion});
                        console.log('La nota promedio de '+nombrefix+' es de: '+operacion);
                        //Opción para mostrar la lista de alumnos completa
                        let general = prompt('Desea ver la lista completa de notas de alumnos? \n Aceptar \n Cancelar').toLowerCase();
                        switch(general){
                            case 'aceptar':
                                console.log('Las notas generales son:')
                                for(let i=0;i<arrayej.length;i++){
                                console.log('Nota final de '+arrayej[i].nombre+': '+arrayej[i].nota)
                                }
                                console.log('A cargo del Profesor: '+profesor.nombre+' '+profesor.apellido);
                            break;
                            case 'cancelar':
                            break;
                            default:
                                console.log('Error, opción de elección de notas finales inválida, por favor eliga entre Aceptar o Cancelar');
                            break;
                            }
                        //Opción para buscar a un alumno en específico
                        let buscaralumno = prompt('Desea buscar algún alumno en partícular? \n Si \n No').toLowerCase().trim();
                        switch(buscaralumno){
                            case 'si':
                                let busqueda = prompt('Cual es el nombre del alumno que quieres encontrar').toLowerCase().trim();
                                let findMyTest = arrayej.find(i=>i.nombre===busqueda)

                                if(findMyTest){
                                    console.log('Se ha encontrado al alumno '+busqueda+' ha finalizado con una nota de '+operacion)
                                } else {
                                    console.log('Archivo no encontrado, error 404')
                                }
                            break;
                            case 'no':
                            break;
                            default:
                                console.log('Error, opción de confirmación de busqueda invalido');
                            break;
                        }
                        } else {
                        //ERROR
                        console.log("Error, algún valor ha sido colocado erroneamente. Tenga en cuenta las siguientes pautas: \n 1-El nombre no debe ser ni números ni caracteres especiales ni espacios en blanco \n 2-Las notas deben ser números, entre el 1 y 10, no puede ser ni más ni menos ni tampoco letras, o espacios en blanco \n 3-No dar en 'Aceptar' sin haber colocado un valor previamente");
                    }
                }
                //LLAMADA
                calculador(prompt('Introduzca nombre').toLowerCase().trim(), 
                prompt('Introduzca nota total de Parciales, del \n 0 al 10'), 
                prompt('Introduzca nota total de Proyectos, del \n 0 al 10'), 
                prompt('Introduzca nota total de EXÁMENES, del \n 0 al 10'));
                break;

                case 'no':
                    console.log('while/switch/No')
                break;

                default:
                    console.log('while/switch/Default')
                break;
            }
            choise = prompt('Desea realizar un NUEVO calculo? \n Si \n No').toLowerCase();
        }
        
    break;
    case 'no':
        console.log('Usted ha declarado que NO desea calcular el Promedio, buen día')
    break;
    default:
        console.log('Dato invalido')
    break;
}
*/


/*
//AHORA HAY QUE AGREGAR:------------------------------------------------------
//-FUNCION ORDEN SUPERIOR (2)
//-AGREGAR EVENTOS
//-MANEJAR DOM
//-USAR JSON Y STORAGE
//-YA NO ESTA PERMITIDO USAR LOS ALERT Y PROMPT, en vez de eso usa INPUT y manejalo con el DOM

//-idea mia: Podes usar un FIND(funcion sup) para encontrar a un alumno en particular
//-idea mia: Podes usar también el FILTER(funcion sup) para mostrar a los alumnos aprobados solamente

*/



const alumnos = [
    {nombre: 'Wachimingo', nota_parc: 10, nota_proj: 10, nota_exam: 10},
    {nombre: 'Armando Estaban Quito', nota_parc: 8, nota_proj: 7, nota_exam: 9}, {nombre: 'El Brashan', nota_parc: 2, nota_proj: 3, nota_exam: 1}]
const alumnosStringy = JSON.stringify(alumnos);


//Local storage

localStorage.setItem('Alumnos',alumnosStringy);


//Agarrar primero selectores
const containBuscar = document.querySelector('#container_search');
const lista = document.querySelector('.alternating-colors')

const valorBuscar = document.querySelector('#input_search');
const valorAgregar = document.querySelector('#input_add');
const nota1 = document.querySelector('#nota_value1');
const nota2 = document.querySelector('#nota_value2');
const nota3 = document.querySelector('#nota_value3');

const clickBuscar = document.querySelector('#button_search');
const clickAgregar = document.querySelector('#button_add');




//Mensaje de que no se encontró al buscar o que no se pudo agregar:
const noSeEncontro = document.createElement('p');
noSeEncontro.innerText = 'No se encontró al alumno'



const nombreEncontrado = localStorage.getItem('Pepito');

let alumnoValor = '';
let alumnoAgregado = '';
let nota1Valor = '';
let nota2Valor = '';
let nota3Valor = '';

//Inputs y botones
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
    console.log(alumnoValor)
})
valorAgregar.addEventListener('input',(event)=>{
    alumnoAgregado = event.target.value;
})
clickAgregar.addEventListener('click',(event)=>{

    if(alumnoAgregado && nota1Valor && nota2Valor && nota3Valor){
        console.log('hurra, existes')
    }else{
        const errormessage = document.createElement('p');
        errormessage.innerText = 'Error, por favor coloque valores validos'
        valorBuscar.appendChild(errormessage);
        console.log('error')
    }


    /*
    localStorage.setItem('Nombre',alumnoAgregado);

    let nuevo_li = document.createElement('li');
    let nuevo_strong = document.createElement('strong');
    let nuevo_p = document.createElement('p');
    let nuevo_li2 = document.createElement('li');
    let nuevo_strong2 = document.createElement('strong');
    let nuevo_p2 = document.createElement('p');
    let nuevo_li3 = document.createElement('li');
    let nuevo_strong3 = document.createElement('strong');
    let nuevo_p3 = document.createElement('p');
    let nuevo_li4 = document.createElement('li');
    let nuevo_strong4 = document.createElement('strong');
    let nuevo_p4 = document.createElement('p');
    let nuevo_li5 = document.createElement('li');
    let nuevo_strong5 = document.createElement('strong');
    let nuevo_p5 = document.createElement('p');

    nuevo_strong.innerText = 'Nombre: ';
    nuevo_p.innerText = alumnoAgregado;

    nuevo_strong2.innerText = 'Nota de Parciales(equivalente al 35% de la nota Final): ';
    nuevo_p2.innerText = nota1Valor;

    nuevo_strong3.innerText = 'Nota de Proyectos(equivalente al 20% de la nota Final): ';
    nuevo_p3.innerText = nota2Valor;

    nuevo_strong4.innerText = 'Nota de Examenes(equivalente al 45% de la nota Final): ';
    nuevo_p4.innerText = nota3Valor;

    nuevo_strong5.innerText = 'Nota Final: ';
    nuevo_p5.innerText = nota1Valor*0.35+nota2Valor*0.20+nota3Valor*0.45;;

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

    lista.appendChild(nuevo_li);
    */
})

console.log()



//-------------------------------------------------------------------------------
//MIS DUDAS: como hacer mas optimo ese codigo
//Como hacer una busqueda que te lleve a otra seccion de la pagina, no links, sino busqueda








