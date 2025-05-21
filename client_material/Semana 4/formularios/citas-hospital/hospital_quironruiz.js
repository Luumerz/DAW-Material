document.addEventListener("DOMContentLoaded", iniciarEventos);

let SEGUROS_MEDICOS = [
    {value: 1, texto: 'Adeslas'},
    {value: 2, texto: 'Asisa'},
    {value: 3, texto: 'Caser Salud'},
    {value: 4, texto: 'DKV'},
    {value: 5, texto: 'Mapfre'},
    {value: 6, texto: 'Sanitas'}
];

// Escribe aquí tu código

function iniciarEventos() {
    let btn = document.getElementById("enviar");
    btn.addEventListener("click", validarFormulario)
    let radios = document.querySelectorAll('input[name="genero"]');
    radios.forEach(radio => {
        radio.addEventListener("change", manejarCambioMedico);
    });
    poblarSeguroMedico();
}

function validarFormulario() {
    validarNombre();
    validarApellidos();
    if (!validarDNI()) {
        return false;
    }else {
        document.getElementById("inputDNI").setCustomValidity("");
    }
    if (!validarTipoMedico()) {
        return false;
    }
}

function validarNombre() {
    document.getElementById("inputNombre").setAttribute("required", "required");
}

function validarApellidos() {
    document.getElementById("inputApellidos").setAttribute("required", "required");
}

function validarDNI() {
    let dni = document.getElementById("inputDNI").value;

    if (dni.length !== 9) {
        document.getElementById("inputDNI").setCustomValidity("El DNI no es válido");
        return false;
    }

    let numeros = dni.slice(0, 8);
    let letra = dni.slice(8).toUpperCase();
    let letrasValidas = "TRWAGMYFPDXBNJZSQVHLCKE";

    if (isNaN(numeros) || !letrasValidas.includes(letra)) {
        document.getElementById("inputDNI").setCustomValidity("El DNI no es válido");
        return false;
    }

    let indice = parseInt(numeros) % 23;
    if (letrasValidas[indice] !== letra) {
        document.getElementById("inputDNI").setCustomValidity("Letra del DNI no válida");
        return false;
    }
    return true;
}

function poblarSeguroMedico() {
    let select = document.getElementById("inputSeguroMedico");
    SEGUROS_MEDICOS.forEach(seguro => {
        let option = document.createElement("option");
        option.value = seguro.value;
        option.textContent = seguro.texto;
        select.appendChild(option);
    });
    select.setAttribute("required", "required");
}

function validarTipoMedico() {
    let tipoMedico = document.querySelector('input[name="medico"]:checked');
    if (!tipoMedico) {
        alert("Debes seleccionar un tipo de médico");
        return false;
    }

    if (tipoMedico.value === "especialista") {
        let especialidad = document.getElementById("inputEspecialidad");
        if (!especialidad.value) {
            alert("Debes seleccionar una especialidad");
            return false;
        }
    }

    return true;
}

function manejarCambioMedico() {
    let especialidad = document.getElementById("inputEspecialidad");
    let seleccionado = document.querySelector('input[name="medico"]:checked');

    if (seleccionado && seleccionado.value === "especialista") {
        especialidad.removeAttribute("disabled");
        especialidad.setAttribute("required", "required");
    } else {
        especialidad.setAttribute("disabled", "disabled");
        especialidad.removeAttribute("required");
        especialidad.value = ""; // Limpiar selección
    }
}