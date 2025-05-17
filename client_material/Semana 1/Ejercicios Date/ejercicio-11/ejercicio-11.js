function diasEntreFechas(fecha1, fecha2) {
    // Convertir ambas fechas a milisegundos y calcular la diferencia
    const msPorDia = 1000 * 60 * 60 * 24;
    const diferenciaMs = Math.abs(fecha2 - fecha1);
    return Math.floor(diferenciaMs / msPorDia);
}

let f1 = new Date(2024, 4, 1);
let f2 = new Date(2025, 4, 17);
console.log("Días transcurridos:", diasEntreFechas(f1, f2));