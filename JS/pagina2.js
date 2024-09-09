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

/*ampliar campos segun la cantidad de pasajes*/

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioPasajeros');
    const tabla = document.getElementById('tablaPasajeros').querySelector('tbody');

    document.getElementById("pasajes").addEventListener("input", function(){
        const cantidad = parseInt(this.value, 10); // Convertir el valor a número entero
        const contenedorPasajeros = document.getElementById("contenedor");
        const pasajerosExistentes = contenedorPasajeros.children.length;

        if (cantidad > pasajerosExistentes) {
            for (let i = pasajerosExistentes + 1; i <= cantidad; i++) {
                const pasajeroDiv = document.createElement('div');
                pasajeroDiv.classList.add('pasajero');
                pasajeroDiv.setAttribute('id', `pasajero-${i}`);
                pasajeroDiv.innerHTML = `
                    <h3>Pasajero ${i}</h3>
                    <label for="nombre${i}">Nombre y Apellido:</label>
                    <input type="text" id="nombre${i}" name="nombre${i}" required>
                    <br>
                    <label for="dni${i}">DNI:</label>
                    <input type="text" id="dni${i}" name="dni${i}" required>
                    <br>
                    <label for="fecha${i}">Fecha de Nacimiento:</label>
                    <input type="date" id="fecha${i}" name="fecha${i}" required>
                    <br>
                `;
                contenedorPasajeros.appendChild(pasajeroDiv);
            }
        }else if (cantidad < pasajerosExistentes) {
            for (let i = pasajerosExistentes; i > cantidad; i--) {
                const pasajeroAEliminar = document.getElementById(`pasajero-${i}`);
                if (pasajeroAEliminar) {
                    contenedorPasajeros.removeChild(pasajeroAEliminar);
                }
            }
        }

    })

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto (recargar la página)

        const cantidad = parseInt(document.getElementById('pasajes').value, 10);
        for (let i = 1; i <= cantidad; i++) {
            const nombre = document.getElementById(`nombre${i}`).value;
            const dni = document.getElementById(`dni${i}`).value;
            const fecha = document.getElementById(`fecha${i}`).value;

            agregarFilaATabla(i, nombre, dni, fecha);
        }

        // Limpiar los campos del formulario después de agregar los datos a la tabla
        formulario.reset();
        document.getElementById('pasajes').value = 0; // Restablecer el valor de cantidad a 1
    });

    function agregarFilaATabla(pasajeroNum, nombre, dni, fecha) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>Pasajero ${pasajeroNum}</td>
            <td>${nombre}</td>
            <td>${dni}</td>
            <td>${fecha}</td>
        `;
        tabla.appendChild(fila);
    }



})
