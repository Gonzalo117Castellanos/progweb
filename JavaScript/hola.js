var meses= ["Enero","Febrero","Marzo","Abril","Mayo","Junio" ,"Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

console.log("Hola Mundo");
console.log(2 + 2);

function adios(){
    console.log("Adios");
}

adios();



function comillas(){

console.log("Qué facil es incluir \'comillas simples\' \n y \"Comillas Dobles\"" );

}

comillas();


alert(meses);



// // Ejercicio 5

// var numero1 = 5;
// var numero2 = 8;
// ++numero1;
// if(numero1<numero2) {
// alert("numero1 no es mayor que numero2");
// }
// if(numero2>0) {
// alert("numero2 es positivo");
// }
// if(numero1 !==0) {
// alert("numero1 es negativo o distinto de cero");
// }
// if(numero1<numero2) {
// alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
// }

// var dniusuario = parseInt(prompt("Introduce tu número de DNI (sin la letra):"));
// var usuarioletra = prompt("Introduce la letra de tu DNI:").toUpperCase();

// var dni;
// var letra;

// var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
//     'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


//     if (dniusuario < 0 || dniusuario> 99999999){

//         alert("El número no es válido");

//     }
//     else {

//           dni= dniusuario%23  
//           letra = letras[dni];
//           alert("Tu DNI completo es: " + dniusuario + usuarioletra);
//     }
// if (usuarioletra !== letra){

// alert("La letra indicada no es correcta");
// }
// else{
// alert("Número y letra DNI correctos");


// }

// var mensaje = "Hola, estoy dentro de un bucle";
// for(var i = 0; i < 5; i++) {
// alert(mensaje);
// }

// var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",
//     "Domingo"];
//     for(var i=0; i<7; i++) {
//     alert(dias[i]);
//     }


    var numfac = parseInt(prompt("Introduce un número"));

    var resul=1;

    for(i=1; i<=numfac;i++){

        resul=resul*i

    }
alert("El factrorial de " + numfac + "es " + resul);