function obtenerNombreMes(numeroMes) {
    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    if (numeroMes < 0 || numeroMes > 11) {
        return 'Mes inválido';
    }

    return meses[numeroMes];
}

const fecha = new Date(); 
const nombreMes = obtenerNombreMes(fecha.getMonth());
console.log(fecha.getMonth()); 
console.log(nombreMes); 