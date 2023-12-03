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
*/

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



