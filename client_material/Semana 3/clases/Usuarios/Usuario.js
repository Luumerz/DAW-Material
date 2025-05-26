class Usuario {
    constructor(nombre, correo, fecha) {
        this.nombre = nombre;
        this.correo = correo;
        this.fecha = fecha;
    }

    validarEmail() {
        let regex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
        return regex.test(this.correo);
    }

    calcularEdad() {
        let fechaActual = new Date().getTime();
        let fechaNacimiento = new Date(this.fecha).getTime();
        let edad = Math.floor((fechaActual - fechaNacimiento) / (1000 * 60 * 60 * 24 * 365));
        return edad;
    }

    mayorEdad(edadMinima) {
        return this.calcularEdad() >= edadMinima;
    }

    generarNombreUsuario() {
        let nombreUsuario = this.nombre.toLowerCase().trim().replace(/ /g, "-");
        let fecha = new Date(this.fecha);
        let anio = fecha.getFullYear();
        nombreUsuario = nombreUsuario + "-" + anio;
        return nombreUsuario;
    }

    procesar() {
        if (this.validarEmail() && this.mayorEdad(18)) {
            return {
                nombre: this.nombre,
                correo: this.correo,
                edad: this.calcularEdad(),
                nombreUsuario: this.generarNombreUsuario()
            };
        } else {
            return null;
        }
    }
}

// Array de prueba
let usuarios = [
    new Usuario("Juan Pérez", "juanperez@example.com", "2000-05-15"),
    new Usuario("Lucía García", "luciagarcia@correo", "2010-03-12"), // email inválido
    new Usuario("Carlos Díaz", "carlosdiaz@gmail.com", "1990-11-02"),
    new Usuario("Ana López", "analopez@mail.com", "2012-01-01") // menor de edad
];

// Procesar y filtrar válidos
let usuariosProcesados = usuarios.map(u => u.procesar());

// Mostrar resultados
console.log("Usuarios válidos procesados:");
console.log(usuariosProcesados);
