//EJERCICIO 2

/*seleccionar ubicacion segun la clase*/

function habilitar_opciones(){
    const ubicacion=document.getElementById("ubicacion");
    for(let i=0;i<ubicacion.options.length;i++){
        ubicacion.options[i].disabled=false;
    }
}

function seleccionar_ubicacion(){
    const clase=document.getElementById("clase").value;
    const tipo_clase=document.getElementById("clase");
    const ubicacion=document.getElementById("ubicacion");
    //alert("se eligio "+clase);

    habilitar_opciones();

    if(clase===tipo_clase.options[2].value){
        ubicacion.options[2].disabled=true;
    }

}

/*limitar hacientos segun la clase*/

function limitar_numero_hacientos(){
    const clase=document.getElementById("clase").value;

    const numero_de_sillas=document.getElementById("silla");

    if(clase==="ejecutiva"){
        numero_de_sillas.min=1;
        numero_de_sillas.max=8;
        numero_de_sillas.value="";
    }else if(clase==="economica"){
        numero_de_sillas.min=9;
        numero_de_sillas.max=50;
        numero_de_sillas.value="";
    }

    
}

function gestionar_segun_clase(){
    seleccionar_ubicacion();

    limitar_numero_hacientos();
}
