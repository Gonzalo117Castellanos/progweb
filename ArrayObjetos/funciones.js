function saludo(){

    document.write("\<h1>Ejemplo de Saludos </h1>\
        <ol>\
        <li>Hola</li>\
         <li>¿Qué hay?</li>\
          <li>De nuevo</li>\
          </ol>");

}

function crearArrayTradicional(){

    let primos = [1,2,3,5,7,11,13,17,19,23,29,31];

    
const divAT = document.getElementById("divArrayIndice");

divAT.innerHTML="<hr><strong>Arreglo de primos =<\strong> " + primos + "<hr>";

//  innerText quita las expresiones html*/

}


// document.write("Hola Mundo");

function arraysAsociativo(){

const alumno =  new Array();
alumno["nombre"]="Juan";
alumno["apellidoPat"]="Sanchez";
alumno["apellidoMat"]="Perez";
alumno["semestre"]=6;
alumno["regular"]=true;

alumno.direccion = new Array;
alumno.direccion.calle="Av. Insurgentes";
alumno.direccion.numExterior=330;
alumno.direccion.colonia="David Gustavo Gutierrez";
alumno.direccion.cp=77010;


//Notación Json(JavaSript Object Notation) 

let nuevoAlumno = {
    nombre:"Erick",
    apellidoPat: "Solorio",
    apellidoMat: "Gutierrez",
    semestre: 6,
    regular:false,
    direccion:{
        calle:"Av. Insurgentes",
        colonia:"David Gustavo Gutierrez",
        numExterior:50,
        cp:77010
    }

};

//Json cadenas que representan objetos
let cadAlumIntercambio='{\
    "nombre":"Jose",\
    "apellidoPat": "Morales",\
    "apellidoMat": "Gutierrez",\
    "semestre": 8,\
    "regular":false,\
   " direccion":{\
        "calle":"Av. Juarez",\
       " colonia":"Centro",\
        "numExterior":70,\
        "cp":77010\
    }\
}';

let objAluIntercambio=JSON.parse(cadAlumIntercambio);
objAluIntercambio.nombre="Jose Guadalupe"


const divAsoc =document.getElementsByTagName("div");
divAsoc[1].innerHTML = "Alumno nombre = " + alumno.nombre + "<br/> Apellido Paterno = " + alumno.apellidoPat + "<br>direccion = " + alumno.direccion.calle + " " + alumno.direccion.numExterior;   //divAsociativos




let elemClass=document.getElementsByClassName("poo");
elemClass[2].innerHTML="Alumno = " + JSON.stringify(alumno);

elemClass[2].innerHTML=elemClass[2].innerHTML
+ "<br/> Alumno de Intercambio: " + JSON.stringify(objAluIntercambio);

}

