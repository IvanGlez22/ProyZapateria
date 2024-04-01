/*
//recuperar elementos del value
/*function forID(){
    const txtNombreUser = document.getElementById("txtNombreUser").value;
    //para colocar un valor en la etiqueta
    const respuestaByID = document.getElementById("respuestaById");
    // primera forma de insertar elementos en el DOM
    respuestaByID.textContent = txtNombreUser;

    //segunda forma con InnerHTML
    const respuestaInner = document.getElementById("respuestaByInner");
    respuestaInner.innerHTML=`<strong>${txtNombreUser}</strong>`

    //tercera opcion
    //insertar en los nodos 
    respuestaByID.insertAdjacentHTML("beforebegin",`<div class=divByID><strong>${txtNombreUser}</strong></div>`);

}

function forClass(){
    const items = document.getElementsByClassName("campoTexto");
    //obtener el valor de cada elemento, una iteracion
    [...items].forEach(element=>{
        alert(element.value);
    })
}
/*

 RECUPERA POR LOS NOMBRES QUE TENGAN ESE MISMO

function forClass(){
    const items = document.getElementsByName("campoTexto");
    //obtener el valor de cada elemento, una iteracion
    [...items].forEach(element=>{
        alert(element.value);
    })
}


 RECUPERA POR LOS tipos de dato, puede ser INPUTS
 
function forClass(){
    const items = document.getElementsByTagName("campoTexto");
    //obtener el valor de cada elemento, una iteracion
    [...items].forEach(element=>{
        alert(element.value);
    })
}



function forQuery(){
    //del primero que se encuentra en cada documento
    const itemElementsClass = document.querySelector(".campoTexto");
    const itemsElementsID = document.querySelector("#uno");
    alert(itemElementsClass.value);
    alert(itemsElementsID.value)
    //acceder por IDs
    //const itemElementsID = document.querySelector("#uno");
}
*/




let contador = 0;
//escuchar el formulario
const frmDatosPersonales = document.getElementById("frmDatosPersonales");
frmDatosPersonales.addEventListener("submit",function(event){
    
    //para que se mantengan mostrados los datos
    
    event.preventDefault();

    contador++;
    const txtNombre = document.getElementById("txtNombre").value;
    const txtColor = document.getElementById("txtColor").value;
    const txtMarca = document.getElementById("txtMarca").value;
    const txtTipoZapato = document.getElementById("txtTipoZapato").value;
    const txtGenero = document.getElementById("txtGenero").value;
    const txtFecha = document.getElementById("txtFecha").value;
    
    //crear fila
    const fila = document.createElement("tr");
    //crear celdas o columnas
    const celdaNumero = document.createElement("td");
    const celdaNombre = document.createElement("td");
    const celdaColor = document.createElement("td");
    const celdaMarca = document.createElement("td");
    const celdaTipoZapato = document.createElement("td");
    const celdaGenero = document.createElement("td");
    const celdaFecha = document.createElement("td");
    const celdaAcciones = document.createElement("td");


    const divBotones = crearBotones();


    //añadir las celdas los valores de las cajas de texto
    celdaNumero.textContent = contador;
    celdaNombre.textContent = txtNombre;
    celdaColor.textContent = txtColor;
    celdaMarca.textContent = txtMarca;
    celdaTipoZapato.textContent = txtTipoZapato;
    celdaGenero.textContent = txtGenero;
    celdaFecha.textContent = txtFecha;

    //se agregan al cont
    celdaAcciones.appendChild(divBotones);


    //añadir las celdas a la fila
    fila.appendChild(celdaNumero);
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaColor);
    fila.appendChild(celdaMarca);
    fila.appendChild(celdaTipoZapato);
    fila.appendChild(celdaGenero);
    fila.appendChild(celdaFecha);
    fila.appendChild(celdaAcciones);

    //agregar la fila al cuerpo de la tabla
    document.getElementById("cuerpoTabla").appendChild(fila);
    document.querySelector("#frmDatosPersonales").reset();


  
});


function crearBotones(){
    const divBotones = document.createElement("div");
    divBotones.className = "btn-group";

    const btnEditar = document.createElement("button");
    const btnEliminar = document.createElement("button");
    const btnAceptar = document.createElement("button");
    //asignar clases a botones
    btnEditar.className = "btn btn-primary";
    btnEliminar.className = "btn btn-danger";
    btnAceptar.className = "btn btn-success";


    
    btnEditar.innerHTML = "<img class='img' src='/src/assets/edit.png'>";
    btnEliminar.innerHTML = "<img class='img' src='/src/assets/deleted.png'>";
    btnAceptar.innerHTML = "<img  class='img' src='/src/assets/checked.png'>";

    //se agrega al contenedor
divBotones.appendChild(btnAceptar);
divBotones.appendChild(btnEditar);
divBotones.appendChild(btnEliminar);

btnAceptar.disabled = true;


let filaEditar = null;
btnEditar.addEventListener("click", function(){
    btnAceptar.disabled = false;
    btnEliminar.disabled = true;
    btnEditar.disabled = true;

//va a detectar un nivel arriba la fila donde se encuentre
const fila = this.closest("tr");
if(fila){
    filaEditar = fila;
    habilitarEdicion(filaEditar);

}else{
    console.log("No se pudo localizar la fila");
}

});


btnAceptar.addEventListener("click",function(){
    if(filaEditar){
        filaEditar.querySelectorAll("td").forEach(function (celda,index){
        if (index!==0 && index !== filaEditar.cells.length-1){
            const nuevoValor = celda.textContent;
            celda.textContent = nuevoValor;
            celda.contentEditable = false;
        }
           
        });
        

        filaEditar = null;
        btnAceptar.disabled = true;
        btnEditar.disabled = false;
        btnEliminar.disabled = false;
    }

});



btnEliminar.addEventListener("click", function(){
    const filaEliminar = this.closest("tr");
    if(filaEliminar){
        filaEliminar.remove();

    }else{
        console.log("No se pudo identificar la fila actual")
    }
});

return divBotones;


}


function habilitarEdicion(filaActual){
    const celdas = filaActual.querySelectorAll("td");
    if(celdas.length >0 ){
        celdas.forEach(function(celda,index){
            if(index !==0 && index != celdas.length - 1){
                celda.contentEditable = true;
                celdas[1].focus();
            }
    });

    }
    else{
        console.log("No hay celdas en la fila seleccionada");
    }
}

