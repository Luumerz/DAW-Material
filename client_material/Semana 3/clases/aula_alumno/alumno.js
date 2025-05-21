class alumno {
    constructor(nombre, apellido1, apellido2, dni) {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.dni = dni;
        this.notas = [];
    }

    agregarNotas(...notas) {
        this.notas = notas;
    }

    obtenerCorreoCorporativo(dominio) {
        
        const normalizarTexto = (texto) => {
            return texto
                .normalize("NFD") // Descompone caracteres con tildes
                .replace(/[\u0300-\u036f]/g, "") // Elimina marcas diacríticas
                .replace(/ñ/g, "n") // Reemplaza 'ñ' por 'n'
                .toLowerCase(); // Convierte a minúsculas
        };

        const inicialNombre = normalizarTexto(this.nombre.charAt(0));
        const primerApellido = normalizarTexto(this.apellido1).slice(0, 3);
        const segundoApellido = normalizarTexto(this.apellido2).slice(0, 3);
        const ultimosDni = this.dni.slice(-3);

        const correo = `${inicialNombre}${primerApellido}${segundoApellido}${ultimosDni}@${dominio}`;
        return correo;
    }

    obtenerNotasMedias() {
        let medias = [];
        for (let asignatura of this.notas) {
            let indice = medias.findIndex(item => item.asignatura === asignatura.asignatura);
            if (indice === -1) {
                medias.push({ asignatura: asignatura.asignatura, nota: asignatura.nota, contador: 1 });
            } else {
                medias[indice].nota += asignatura.nota;
                medias[indice].contador++;
            }
        }

        let notasMedias = medias.map(item => {
            return { asignatura: item.asignatura, nota: item.nota / item.contador };
        });
        return notasMedias;
    }
}