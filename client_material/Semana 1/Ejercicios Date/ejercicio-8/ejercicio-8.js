let date = new Date();
console.log(date.getUTCHours());
console.log(date.getHours());

// La diferencia se debe a la zona horaria local respecto a UTC.
// En España peninsular, la diferencia suele ser +1 (invierno) o +2 (verano) horas.