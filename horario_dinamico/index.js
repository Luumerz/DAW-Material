let dias = [
    { id: 1, nombre: 'L' },
    { id: 2, nombre: 'M' },
    { id: 3, nombre: 'X' },
    { id: 4, nombre: 'J' },
    { id: 5, nombre: 'V' }
];

let tramos = [
    { id: 1, hora: '8:00-9:00', descripcion: '1ª Hora' },
    { id: 2, hora: '9:00-10:00', descripcion: '2ª Hora' },
    { id: 3, hora: '10:00-11:00', descripcion: '3ª Hora' },
    { id: 4, hora: '11:00-11:30', descripcion: 'RECREO' },
    { id: 5, hora: '11:30-12:30', descripcion: '4ª Hora' },
    { id: 6, hora: '12:30-13:30', descripcion: '5ª Hora' },
    { id: 7, hora: '13:30-14:30', descripcion: '6ª Hora' }
];

let asignaturas = [
    { id: 1, nombre: '', grupo: '', aula: '', color: 'white' },
    { id: 2, nombre: 'Música', grupo: '1º ESO A', aula: 'Aula 6', color: 'blue' },
    { id: 3, nombre: 'Entorno Desarrollo', grupo: '1ºDAW', aula: 'Aula 9C', color: 'magenta' },
    { id: 4, nombre: 'Comput. y robótica', grupo: '1ºESO D', aula: 'Aula 10A', color: 'cyan' },
    { id: 5, nombre: 'Comput. y robótica', grupo: '1ºESO B', aula: 'Aula VII', color: 'yellow' },
    { id: 6, nombre: 'Despl. Aplic. Web', grupo: '2ºDAW', aula: 'Aula 10B', color: 'green' },
    { id: 7, nombre: 'Guardia Mant.', grupo: '', aula: 'Taller Informática', color: 'SteelBlue' },
    { id: 8, nombre: 'Música', grupo: '1º ESO B', aula: 'Aula 7', color: 'brown' },
    { id: 9, nombre: 'RECREO', grupo: '', aula: '', color: 'LightGrey' },
];


let horario = [
    {
        idTramo: 1, asignaturas: [
            { idDia: 1, idAsignatura: 2 },
            { idDia: 2, idAsignatura: 3 },
            { idDia: 3, idAsignatura: 3 },
            { idDia: 4, idAsignatura: 1 },
            { idDia: 5, idAsignatura: 7 }
        ]
    },
    {
        idTramo: 2, asignaturas: [
            { idDia: 1, idAsignatura: 7 },
            { idDia: 2, idAsignatura: 2 },
            { idDia: 3, idAsignatura: 3 },
            { idDia: 4, idAsignatura: 1 },
            { idDia: 5, idAsignatura: 4 }
        ]
    },
    {
        idTramo: 3, asignaturas: [
            { idDia: 1, idAsignatura: 1 },
            { idDia: 2, idAsignatura: 4 },
            { idDia: 3, idAsignatura: 7 },
            { idDia: 4, idAsignatura: 1 },
            { idDia: 5, idAsignatura: 5 }
        ]
    },
    {
        idTramo: 4, asignaturas: [
            { idDia: 1, idAsignatura: 9 },
            { idDia: 2, idAsignatura: 9 },
            { idDia: 3, idAsignatura: 9 },
            { idDia: 4, idAsignatura: 9 },
            { idDia: 5, idAsignatura: 9 }
        ]
    },
    {
        idTramo: 5, asignaturas: [
            { idDia: 1, idAsignatura: 1 },
            { idDia: 2, idAsignatura: 1 },
            { idDia: 3, idAsignatura: 1 },
            { idDia: 4, idAsignatura: 8 },
            { idDia: 5, idAsignatura: 6 }
        ]
    },
    {
        idTramo: 6, asignaturas: [
            { idDia: 1, idAsignatura: 1 },
            { idDia: 2, idAsignatura: 1 },
            { idDia: 3, idAsignatura: 1 },
            { idDia: 4, idAsignatura: 8 },
            { idDia: 5, idAsignatura: 6 }
        ]
    },
    {
        idTramo: 7, asignaturas: [
            { idDia: 1, idAsignatura: 1 },
            { idDia: 2, idAsignatura: 1 },
            { idDia: 3, idAsignatura: 1 },
            { idDia: 4, idAsignatura: 1 },
            { idDia: 5, idAsignatura: 6 }
        ]
    }
];

// Escribe aquí tu código


//Obtener asignatura
function obtenerAsignatura(idAsignatura) {
    for (let asignatura of asignaturas) {
        if (idAsignatura == asignatura.id) {
            return asignatura;
        }
    }
}

//Obtener tramo
function obtenerTramo(idTramo) {
    for (let tramo of tramos) {
        if (idTramo == tramo.id) {
            return tramo;
        }
    }
}

//Obtener dia
function obtenerDia(idDia) {
    for (let dia of dias) {
        if (idDia == dia.id) {
            return dia;
        }
    }
}

function mostrarAula(aula) {
    document.getElementById('aula').innerHTML = aula;
}

function dejarDeMostrar() {
    document.getElementById('aula').innerHTML = '';
}

//Generar tabla
function generarTabla() {
    let tabla = document.getElementById('horario');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    tabla.innerHTML = ''; // Limpiar la tabla

    let encabezado = '<tr><th></th>'; 
    for (let dia of dias) {
        encabezado += `<th>${dia.nombre}</th>`;
    }
    encabezado += '</tr>';
    thead.innerHTML = encabezado;
    tabla.appendChild(thead);
    thead.innerHTML += '</tr>';
    tabla.appendChild(thead);

    let cuerpo = '';
    for(dato of horario){
        let tramo = obtenerTramo(dato.idTramo);
        let asignaturas = dato.asignaturas;
        let fila = `<tr><td>${tramo.hora}</td>`;
        for (let dia of dias) {
            let asignatura = asignaturas.find(asignatura => asignatura.idDia == dia.id);
            if (asignatura) {
                let asignaturaObj = obtenerAsignatura(asignatura.idAsignatura);
                fila += `<td onMouseOver="mostrarAula('${asignaturaObj.aula}')" onMouseOut="dejarDeMostrar()" style="background-color: ${asignaturaObj.color};">${asignaturaObj.nombre}<br>${asignaturaObj.grupo}</td>`;
            } else {
                fila += '<td></td>';
            }

        }
        fila += '</tr>';
        cuerpo += fila;
    }
    tbody.innerHTML = cuerpo;
    tabla.appendChild(tbody);
}


document.getElementById('inputCrearHorario').addEventListener('click', generarTabla);