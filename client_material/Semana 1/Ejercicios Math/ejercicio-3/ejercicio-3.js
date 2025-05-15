// Función para convertir grados a radianes
function gradosARadianes(grados) {
    return grados * Math.PI / 180;
}

// Coseno de 30º
let grados30 = 30;
let radianes30 = gradosARadianes(grados30);
let coseno30 = Math.cos(radianes30);
console.log("Coseno de 30º:", coseno30); // Debería ser aproximadamente 0.8660

// Seno de 45º
let grados45 = 45;
let radianes45 = gradosARadianes(grados45);
let seno45 = Math.sin(radianes45);
console.log("Seno de 45º:", seno45); // Debería ser aproximadamente 0.7071

// Coseno de π radianes
let cosenoPiTercios = Math.cos(Math.PI / 3);
console.log("Coseno de π/3 radianes:", cosenoPiTercios); // Debería ser aproximadamente 0.5