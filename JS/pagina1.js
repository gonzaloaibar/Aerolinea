//EJERCICIO 1

//validacion de la fecha
document.getElementById("formulario").addEventListener("submit", function(event){
    const fecha_actual=new Date();

    const fecha_ingresada=new Date(document.getElementById("fecha").value);

    if(fecha_ingresada<fecha_actual ){
        event.preventDefault();
        alert("la fecha del vuelo no puede ser mayor a la fecha actual");

    }

})

//validacion del origen y destino del vuelo

function habilitar_opciones(){
    const destino=document.getElementById("destino");
    for(let i=0;i<destino.options.length;i++){
        destino.options[i].disable=false;
    }
}



function verificar_destino(){
    const origen = document.getElementById("origen").value;
    let destino = document.getElementById("destino");
    alert("la opcion es "+origen);

    habilitar_opciones();

    for(let i=0;i<destino.options.length; i++){
        if(destino.options[i].value===origen){
            destino.options[i].disable=true;
        }
    }
    
}


