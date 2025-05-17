// Fecha 28/2/2021
let date1 = new Date(2021, 1, 28);
date1.setDate(date1.getDate() + 1);
console.log("Día siguiente a 28/2/2021:", date1.toLocaleDateString());

// Fecha 28/2/2020 (año bisiesto)
let date2 = new Date(2020, 1, 28);
date2.setDate(date2.getDate() + 1);
console.log("Día siguiente a 28/2/2020:", date2.toLocaleDateString());

// Explicación:
// En 2021, el día siguiente a 28/2 es 1/3/2021 porque 2021 no es bisiesto.
// En 2020, el día siguiente a 28/2 es 29/2/2020 porque 2020 sí es bisiesto y febrero tiene 29 días.