//EJERCICIO 1

//validacion de la fecha
document.gentElementById("formulario").addEventListener("sumbit", function(event){
    const fecha_actual=new Date();

    const fecha_ingresada=new Date(document.getElementById("fecha").value);

    if(fecha_actual > fecha_ingresada){
        event.preventDefault();
        alert("la fecha del vuelo no puede ser mayor a la fecha actual");

    }

})
