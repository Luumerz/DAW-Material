document.addEventListener("DOMContentLoaded", iniciarEventos);

let SEGUROS_MEDICOS = [
    { value: 1, texto: 'Adeslas' },
    { value: 2, texto: 'Asisa' },
    { value: 3, texto: 'Caser Salud' },
    { value: 4, texto: 'DKV' },
    { value: 5, texto: 'Mapfre' },
    { value: 6, texto: 'Sanitas' }
];

// Escribe aquí tu código

function iniciarEventos() {
    let btn = document.getElementById("enviar");
    btn.addEventListener("click", function (e) {
        validarFormulario(e);
    });

    let radios = document.querySelectorAll('input[name="medico"]');
    radios.forEach(radio => {
        radio.addEventListener("change", manejarCambioMedico);
    });

    poblarSeguroMedico();

    // Validación en tiempo real (opcional)
    document.getElementById("inputDNI").addEventListener("input", validarDNI);
}

function poblarSeguroMedico() {
    document.getElementById("inputSeguroMedico").setAttribute("required", "required");
    let seguroMedico = document.getElementById("inputSeguroMedico");
    SEGUROS_MEDICOS.forEach(seguro => {
        let option = document.createElement("option");
        option.value = seguro.value;
        option.textContent = seguro.texto;
        seguroMedico.appendChild(option);
    });
}

function validarFormulario(event) {
    validarNombre();
    validarApellidos();

    if (!validarDNI()) {
        document.getElementById("inputDNI").reportValidity();
        event.preventDefault();
        return false;
    }

    if (!validarTipoMedico()) {
        event.preventDefault();
        return false;
    }

    if (!validarFecha()) {
        document.getElementById("inputFechaCita").reportValidity();
        event.preventDefault();
        return false;
    }

    if (!validarHora()) {
        document.getElementById("inputHoraCita").reportValidity();
        event.preventDefault();
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
    let dniInput = document.getElementById("inputDNI");
    let dni = dniInput.value.trim();

    dniInput.setCustomValidity("");

    if (dni === "") {
        dniInput.setCustomValidity("El DNI es obligatorio");
        return false;
    }

    let regex = /^(\d{8})-?([a-zA-Z])$/;
    let match = dni.match(regex);

    if (!match) {
        dniInput.setCustomValidity("Formato de DNI incorrecto");
        return false;
    }

    let numero = parseInt(match[1]);
    let letra = match[2].toUpperCase();
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let letraCorrecta = letras.charAt(numero % 23);

    if (letra !== letraCorrecta) {
        dniInput.setCustomValidity("La letra del DNI no es correcta");
        return false;
    }
    return true;
}

function validarTipoMedico() {
    let tipoMedico = document.querySelector('input[name="medico"]:checked');

    if (tipoMedico.id === "inputMedicoEspecialista") {
        let especialidad = document.getElementById("inputEspecialidad");
        if (!especialidad.value) {
            especialidad.setCustomValidity("La especialidad es obligatoria");
            especialidad.reportValidity();
            return false;
        } else {
            especialidad.setCustomValidity("");
        }
    }
    return true;
}

function manejarCambioMedico() {
    let especialidad = document.getElementById("inputEspecialidad");
    let seleccionado = document.querySelector('input[name="medico"]:checked');

    if (seleccionado && seleccionado.id === "inputMedicoEspecialista") {
        especialidad.removeAttribute("disabled");
        especialidad.setAttribute("required", "required");
    } else {
        especialidad.setAttribute("disabled", "disabled");
        especialidad.removeAttribute("required");
        especialidad.value = "";
    }
}

function validarFecha() {
    let fechaInput = document.getElementById("inputFechaCita");
    fechaInput.setAttribute("required", "required");
    let fechaCita = fechaInput.value;
    let fecha = new Date(fechaCita);

    if (fecha.getDay() < 1 || fecha.getDay() > 4) {
        fechaInput.setCustomValidity("La cita debe ser de lunes a jueves");
        return false;
    } else {
        fechaInput.setCustomValidity("");
    }
    return true;
}

function validarHora() {
    let fechaInput = document.getElementById("inputFechaCita");
    let horaInput = document.getElementById("inputHoraCita");

    let fecha = new Date(fechaInput.value);
    let hora = horaInput.value;

    horaInput.setCustomValidity("");

    horaInput.setAttribute("required", "required");

    let [horaH, minutoH] = hora.split(":").map(Number);
    let minutosTotales = horaH * 60 + minutoH;

    let diaSemana = fecha.getDay();

    if (diaSemana >= 1 && diaSemana <= 3) {
        // Lunes a miércoles: 10:00 - 14:15
        let desde = 10 * 60;      
        let hasta = 14 * 60 + 15; 
        if (minutosTotales < desde || minutosTotales > hasta) {
            horaInput.setCustomValidity("La hora debe estar entre 10:00 y 14:15 de lunes a miércoles");
            return false;
        }
    } else if (diaSemana === 4) {
        // Jueves: 18:30 - 20:00
        let desde = 18 * 60 + 30; // 1110
        let hasta = 20 * 60;      // 1200
        if (minutosTotales < desde || minutosTotales > hasta) {
            horaInput.setCustomValidity("La hora debe estar entre 18:30 y 20:00 los jueves");
            return false;
        }
    }

    return true;
}

