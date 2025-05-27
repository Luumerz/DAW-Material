document.addEventListener("DOMContentLoaded", iniciarEventos);

let SEGUROS_MEDICOS = [
    { value: 1, texto: 'Adeslas' },
    { value: 2, texto: 'Asisa' },
    { value: 3, texto: 'Caser Salud' },
    { value: 4, texto: 'DKV' },
    { value: 5, texto: 'Mapfre' },
    { value: 6, texto: 'Sanitas' }
];

function iniciarEventos() {
    poblarSeguroMedico();
    let btn = document.getElementById("enviar");
    btn.addEventListener("click", function (e) {
        validarFormulario(e);
    });
    let radios = document.querySelectorAll('input[name="medico"]');
    radios.forEach(radio => {
        radio.addEventListener("change", manejarCambioMedico);
    });
}

function poblarSeguroMedico() {
    document.getElementById("inputSeguroMedico").setAttribute("required", "required");
    let seguroMedico = document.getElementById("inputSeguroMedico");
    for (let seguro of SEGUROS_MEDICOS) {
        let option = document.createElement("option");
        option.value = seguro.value;
        option.textContent = seguro.texto;
        seguroMedico.appendChild(option);
    }
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
        document.getElementById("inputEspecialidad").reportValidity();
        event.preventDefault();
        return false;
    }
    if (!validarFecha()) {
        document.getElementById("inputFechaCita").reportValidity();
        event.preventDefault();
        return false;
    }
    if(!validarHoras()) {
        document.getElementById("inputHoraCita").reportValidity();
        event.preventDefault();
        return false;
    }
}

function validarNombre() {
    let nombre = document.getElementById("inputNombre");
    nombre.setAttribute("required", "required");
}

function validarApellidos() {
    let apellidos = document.getElementById("inputApellidos");
    apellidos.setAttribute("required", "required");
}

function validarDNI() {
    let inputDNI = document.getElementById("inputDNI");

    let dni = document.getElementById("inputDNI").value;
    dni = dni.trim();

    inputDNI.setCustomValidity("");

    if (dni === "") {
        inputDNI.setCustomValidity("El DNI es obligatorio");
        return false;
    }

    let regex = /^([0-9]{8})([a-zA-Z])$/;
    let match = dni.match(regex);

    if (!match) {
        inputDNI.setCustomValidity("Formato de DNI incorrecto");
        return false;
    }

    let numero = parseInt(match[1]);
    let letra = match[2].toUpperCase();

    let letras = "trwagmyfpdxbnjzsqvhlcke";
    letras = letras.toUpperCase();

    let indice = numero % 23;
    let letraCorrecta = letras.charAt(indice);

    if (letra != letraCorrecta) {
        inputDNI.setCustomValidity("La letra del DNI no es correcta");
        return false;
    }
    return true;
}

function validarTipoMedico() {
    let tipoMedico = document.querySelector("input[name='medico']:checked");
    if (tipoMedico.id === "inputMedicoEspecialista") {
        let especialidad = document.getElementById("inputEspecialidad");
        if (!especialidad.value) {
            especialidad.setCustomValidity("La especialidad es obligatoria");
            return false;
        } else {
            especialidad.setCustomValidity("");
        }
    } else {
        let especialidad = document.getElementById("inputEspecialidad");
        especialidad.setCustomValidity("");
    }
    return true;
}

function manejarCambioMedico() {
    let tipoMedico = document.querySelector("input[name='medico']:checked");
    let especialidad = document.getElementById("inputEspecialidad");

    if (tipoMedico && tipoMedico.id === "inputMedicoEspecialista") {
        especialidad.removeAttribute("disabled");
        especialidad.setAttribute("required", "required");
    } else {
        especialidad.setAttribute("disabled", "disabled");
        especialidad.removeAttribute("required");
        especialidad.value = "";
    }
}

function validarFecha() {
    let inputFecha = document.getElementById("inputFechaCita");
    inputFecha.setAttribute("required", "required");
    let fecha = new Date(inputFecha.value);
    let dia = fecha.getDay();
    if (dia < 1 || dia > 4) {
        inputFecha.setCustomValidity("La cita solo puede ser de lunes a jueves");
        return false;
    } else {
        inputFecha.setCustomValidity("");
    }
    return true;
}

function validarHoras() {
    let inputHoras = document.getElementById("inputHoraCita");
    inputHoras.setAttribute("required", "required");

    let inputFecha = document.getElementById("inputFechaCita");
    let fecha = new Date(inputFecha.value);

    let [horaH, minutoH] = inputHoras.value.split(":").map(Number);

    let minutosTotales = horaH * 60 + minutoH;

    if (fecha.getDay() >= 1 && fecha.getDay() <= 3) {
        let inicio = 10 * 60;
        let final = 14 * 60 + 15;
        if (minutosTotales < inicio || minutosTotales > final) {
            inputHoras.setCustomValidity("La hora debe estarcomprendida entre las 10:00 y las 14:15 los lunes, martes y miércoles");
            return false;
        } else {
            inputHoras.setCustomValidity("");
        }
    }

    if (fecha.getDay() == 4) {
        let inicio = 18 * 60 + 30;
        let final = 20 * 60;
        if (minutosTotales < inicio || minutosTotales > final) {
            inputHoras.setCustomValidity("La hora debe estarcomprendida entre las 18:30 y las 20:00 los jueves");
            return false;
        } else {
            inputHoras.setCustomValidity("");
        }
    }
    return true;
}