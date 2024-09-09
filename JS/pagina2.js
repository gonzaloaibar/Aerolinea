
//EJERCICIO2

/*limitar hacientos segun la clase*/
function limitar_numero_hacientos(i){
    const clase=document.getElementById(`clase${i}`).value;

    const numero_de_sillas=document.getElementById(`silla${i}`);

    if(clase==="Ejecutiva"){
        numero_de_sillas.min=1;
        numero_de_sillas.max=8;
        numero_de_sillas.value="";
    }else if(clase==="Economica"){
        numero_de_sillas.min=9;
        numero_de_sillas.max=50;
        numero_de_sillas.value="";
    }

    
}

/*limitar ubicacion de asiento segun la clase */
function habilitar_opciones(i){
    const ubicacion=document.getElementById(`ubicacion${i}`);
    for(let i=0;i<ubicacion.options.length;i++){
        ubicacion.options[i].disabled=false;
    }
}

function seleccionar_ubicacion(i){
    const clase=document.getElementById(`clase${i}`).value;
    const tipo_clase=document.getElementById(`clase${i}`);
    const ubicacion=document.getElementById(`ubicacion${i}`);
    //alert("se eligio "+clase);

    habilitar_opciones(i);

    if(clase===tipo_clase.options[1].value){
        ubicacion.options[2].disabled=true;
    }

}

function gestionar_segun_clase(i){
    seleccionar_ubicacion(i);

    limitar_numero_hacientos(i);
}


//EJERCICIO 3(incompleto)

/*registro de los pasajeros en una tabla dinamica */
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioPasajeros');
    const tabla = document.getElementById('tablaPasajeros').querySelector('tbody');
    const contenedorPasajeros = document.getElementById('contenedorPasajeros');

    
    document.getElementById('cantidadPasajes').addEventListener('input', function() {
        const cantidad = parseInt(this.value, 10);
        const pasajerosExistentes = contenedorPasajeros.children.length;

        if (cantidad > pasajerosExistentes) {
            for (let i = pasajerosExistentes + 1; i <= cantidad; i++) {
                agregarPasajero(i);
            }
        } else if (cantidad < pasajerosExistentes) {
            for (let i = pasajerosExistentes; i > cantidad; i--) {
                if (i > 1) {
                    const pasajeroAEliminar = document.getElementById(`pasajero-${i}`);
                    if (pasajeroAEliminar) {
                        contenedorPasajeros.removeChild(pasajeroAEliminar);
                    }
                }
            }
        }
    });

    // Función para agregar un nuevo pasajero
    function agregarPasajero(numero) {
        const pasajeroDiv = document.createElement('div');
        pasajeroDiv.classList.add('pasajero');
        pasajeroDiv.setAttribute('id', `pasajero-${numero}`);
        pasajeroDiv.innerHTML = `
            <h3>Pasajero ${numero}</h3>
            <label for="nombre${numero}">Nombre y Apellido:</label>
            <input type="text" id="nombre${numero}" name="nombre${numero}" required><br>
            <label for="dni${numero}">DNI:</label>
            <input type="text" id="dni${numero}" name="dni${numero}" required><br>
            <label for="fecha${numero}">Fecha de Nacimiento:</label>
            <input type="date" id="fecha${numero}" name="fecha${numero}" required><br>
            <label for="clase${numero}">Clase:</label>
            <select id="clase${numero}" name="clase${numero}" onchange="gestionar_segun_clase(${numero})" required>
                <option value="">seleccionar</option>
                <option value="Ejecutiva">Ejecutiva</option>
                <option value="Economica">Económica</option>
            </select><br>
            <label for="ubicacion${numero}">ubicacion del haciento</label>
            <select name="ubicacion${numero}" id="ubicacion${numero}">
                <option value="">seleccionar</option>
                <option value="ventanilla">VENTANILLA</option>
                <option value="centro">CENTRO</option>
                <option value="pasillo">PASILLO</option>
             </select>
            <br><br>   
            <label for="silla${numero}">seleccione numero de silla</label>
            <input type="number" id="silla${numero}" name="silla${numero}" min="1" max="50">
            <br><br>
            <label for="genero${numero}">seleccione su sexo</label>
            <br>
            <input type="radio" id="hombre${numero}" name="sexo${numero}" value="Hombre">
            <label for="hombre${numero}">Hombre</label>
            <input type="radio" id="mujer${numero}" name="sexo${numero}" value="Mujer">
            <label for="mujer${numero}">Mujer</label>
            <br><br>
        `;
        contenedorPasajeros.appendChild(pasajeroDiv);
    }

   
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const cantidad = parseInt(document.getElementById('cantidadPasajes').value, 10);
        for (let i = 1; i <= cantidad; i++) {
            const nombre = document.getElementById(`nombre${i}`).value;
            const dni = document.getElementById(`dni${i}`).value;
            const fecha = document.getElementById(`fecha${i}`).value;
            const clase = document.getElementById(`clase${i}`).value;
            const silla=document.getElementById(`silla${i}`).value;

            agregarFilaATabla(nombre, dni, fecha, clase,silla);
        }

        
        formulario.reset();
        document.getElementById('cantidadPasajes').value = 1; 
    });

    // Función para agregar una fila a la tabla
    function agregarFilaATabla( nombre, dni, fecha, clase, silla) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${dni}</td>
            <td>${fecha}</td>
            <td>${silla}</td>
            <td>${clase}</td>
        `;
        tabla.appendChild(fila);
    }
});
