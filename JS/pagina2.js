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



document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioPasajeros');
    const tabla = document.getElementById('tablaPasajeros').querySelector('tbody');

    /*ampliar campos segun la cantidad de pasajes*/
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
                    <br><br>
                    <label for="clase${i}">tipo de clase</label>
                    <select name="clase${i}" id="clase${i}" required>
                        <option value="">seleccionar</option>
                        <option value="economica">ECONOMICA</option>
                        <option value="ejecutiva">EJECUTIVA</option>
                    </select>
                    <br><br>
                    <label for="ubicacion${i}">ubicacion del haciento</label>
                    <select name="ubicacion${i}" id="ubicacion${i}">
                        <option value="">seleccionar</option>
                        <option value="ventanilla">VENTANILLA</option>
                        <option value="centro">CENTRO</option>
                        <option value="pasillo">PASILLO</option>
                    </select>
                    <br><br>
                    <label for="silla${i}">seleccione numero de silla</label>
                    <input type="number" id="silla${i}" name="silla${i}" min="1" max="50">
                    <br><br>
                    <p>seleccione el sexo</p>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                        masculino
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                        femenino
                        </label>
                    </div>
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
            const num_asiento=document.getElementById(`silla${i}`).value;
            const clase=document.getElementById(`clase${i}`).value;
            
            agregarFilaATabla(nombre, dni, fecha, num_asiento, clase);
        }

        // Limpiar los campos del formulario después de agregar los datos a la tabla
        formulario.reset();
        document.getElementById('pasajes').value = 0; // Restablecer el valor de cantidad a 1
    });

    function agregarFilaATabla(nombre, dni, fecha, num_asiento,clase) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${dni}</td>
            <td>${fecha}</td>
            <td>${num_asiento}</td>
            <td>${clase}</td>
        `;
        tabla.appendChild(fila);
    }



})
