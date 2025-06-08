window.onload = function(){

//Hacemos referencia a los objetos en el formulario.
const selectElement = document.forms[0].categoria;

//Accedemos a algunos objetos por su id.
const container = document.getElementById("container");
const container2 = document.getElementById("guisados");

//El boton de envio.
const sendButton = document.getElementById("send-button");

const finish = document.getElementById("finish");

//Utilizaremos dos eventos, cuando se envie el formulario
sendButton.addEventListener('click', validate);

finish.addEventListener('click', completarCompra);

//Cuando se cambie el primer campo, la categoria, el elemento select
selectElement.addEventListener('change', showProducts);

product_list = [];
var ids = 0;

var elementos = document.forms[0].elements;

function validate(e){
//Creamos nuestra funcion de validacion
    e.preventDefault();

    //Expresión regular para hallar espacios en blanco
    var patron = /^\s+/;
    var opciones = ["Carnitas","Mexicana","Hawaiana","Vegetariana","BBQ"];
    let categoria = elementos[0];
    //Eliminar espacios vacíos en el input de texto llamado guisado.
    let guisado = elementos[1].value.trim();
    
    var cantidad = elementos[2].value;
//El guisado nuestro segundo campo no puede ser nulo, no puede tener longitud de 0, la tercera condicion indica que no pueden ser solo espacios vacios
    
    if (categoria.selectedIndex == 0){
        
        return false; //Cancela
    }
    else if (!opciones.includes(guisado)){
        console.log("Opción inválida");
        
        return false; //No envía
    } 
    //Condición: Si el guisado no es nulo, O escribimos algo O no colocamos solo espacios en blanco o mientras sea texto y no un número.
    else if(guisado == null || guisado.length == 0 || patron.test(guisado) || /\d+/.test(guisado)){
        
        return false; //No envía
    
    }else if(cantidad == null ||isNaN(cantidad) || cantidad <=0 || cantidad>99) { 
        
        return false; //No envía
    
    }else{
        //Si todo sale bien, se añade un producto
        addProduct();
        //e.preventDefault();
    }
    //Cambiar el estilo CSS de la lista de productos
    if (product_list.length >0){
        finish.style.display = "block";
    }
}

function showProducts(){
    if(selectElement.value=="Pizza"){
        container2.textContent = "Carnitas (90), Mexicana (80), Hawaiana (80), Vegetariana (90), BBQ (100)";
    }
    else if (selectElement.value=="Hamburguesa"){
        container2.textContent = "Carnitas (90), Mexicana (80), Hawaiana (80), Vegetariana (90)";
    }
}

function addProduct () { 
    //event.preventDefault(); 
    var id = ids;
    let guisado = elementos[1].value.trim();
    var categoria = elementos[0].value;
    var size = document.forms[0].size.value;
 
    var c1 = document.getElementById("nachos");
    var c2 = document.getElementById("aros");
    var c3 = document.getElementById("papas");
    var c4 = document.getElementById("canelazos");
    
    var complementos = [c1,c2,c3,c4];
    
    var producto = new Producto(id, categoria, guisado,elementos[2].value, size, complementos);
    console.log(producto.id);
    ids+=1;

    //Crear un div vacío
    const element = document.createElement('div');
    //añadir la clase card al elemento creado
    element.className ="card";
        
    //Siempre colocar este par de comillas especiales ` `
    element.innerHTML = 
    `<p>
        <strong>${categoria} de ${producto.guisado}</strong>
        <br>
        Cantidad: ${producto.cantidad}   
        Precio: ${producto.precio}   
        Complementos: ${producto.extras} $50 c/orden
        Total a pagar: ${producto.getTotal()}
    </p>
    <input type="button" class="button" name="delete" value="Eliminar">
    `;

    //Añadir elemento en la pantalla
    container.appendChild(element);
    
    //Añadir un nuevo producto a la lista interna del programa
    product_list.push(producto);
    
    //Borrar el formulario
    document.forms[0].reset();
    
    //Mostrar la lista de producto
    console.log(product_list);
    
    //Esta función se añadió para evitar un error y clicks infinitos
    container.removeEventListener("click", deleteProduct);
    
    container.addEventListener("click", function(e){
    console.log(e.target+": "+e.target.name+" "+ producto.id);
    if(e.target.name === 'delete'){
        deleteProduct(e.target, producto.id);
    }else{
        return;
    }
});
    
    return false;
}

//Calcular el monto total de la compra
function completarCompra(){
    var total = 0;
    for(i=0; i< product_list.length; i++){
    console.log(product_list[i]);
         total+=product_list[i].getTotal();
    }
    alert("Monto total a pagar: "+total);
}


//Función para borrar un producto recibiendo su ID (numérico)
function deleteProduct(element, id){
    if(element.name === 'delete'){
        element.parentElement.remove();
        if(product_list.length > 0){
            //console.log("Eliminado: "+ product_list[id].tipo +" de "+ product_list[id].guisado);
            product_list.splice(id,1);
            ids-=1;
        }
            console.log("Productos: "+ product_list.length);
    }else{
        return;
    }
}

//Función producto, en realidad es como si crearamos un OBJETO
function Producto(id, tipo, guisado, cantidad, size, complementos){
    this.id = id;
    this.tipo = tipo;
    this.guisado = guisado;
    this.cantidad = cantidad;
    this.size = size;
    this.extras="";
    
    console.log("ID: "+id);
    
    switch (guisado){
        case "Carnitas":
            this.precio = 90;
            break;
        case "Mexicana":
            this.precio = 80;
            break;
        case "Hawaiana":
            this.precio = 80;
            break;
        case "Vegetariana":
            this.precio = 90;
            break;
        case "BBQ":
            this.precio = 100;
            break;
    }
    
    this.subtotal = this.cantidad*this.precio;
    
    var tama = 0;
    
    if(this.size == "pequeña"){
        tama+=10;
    }
    else if(this.size == "mediana"){
        tama+=20;
    }else{
        tama+=30;
    }
    
    var adicional = 0;

    for (var i=0; i<complementos.length;i++){
           if(complementos[i].checked == true){
               adicional+=50;
               this.extras+=complementos[i].value+", ";
           }
    }

    this.getTotal = function (){
        var total = this.subtotal + tama*this.cantidad + adicional;
        return total;
    }  
//LLave para cerrrar la función producto 
}

//Llave para cerrar el función del inicio
}


