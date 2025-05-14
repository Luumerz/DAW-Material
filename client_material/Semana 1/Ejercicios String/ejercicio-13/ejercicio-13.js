let str = "JavaScript";

// Rellenar al final con asteriscos hasta tener 15 caracteres
str = str.padEnd(15, '*');
console.log(str);

// Rellenar al principio con almohadillas hasta tener 20 caracteres
str = str.padStart(20, '#');
console.log(str);