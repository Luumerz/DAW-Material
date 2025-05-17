function obtenerNombreDia(numeroDia) {
    const dias = [
        'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes',
        'Sabado', 'Domingo'
    ];

    if (numeroDia< 0 || numeroDia > 6) {
        return 'Día inválido';
    }

    return dias[numeroDia];
}

const fecha = new Date(); 
const nombreDia = obtenerNombreDia(fecha.getDay());
console.log(fecha.getDay()); 
console.log(nombreDia); 