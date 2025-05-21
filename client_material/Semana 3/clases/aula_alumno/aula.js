class aula {
    constructor(numeroAula, nombreAula) {
        this.numeroAula = numeroAula;
        this.nombreAula = nombreAula;
    }

    agregarAlumno(alumno) {
        if (this.alumnos === undefined) {
            this.alumnos = [];
        }
        this.alumnos.push(alumno);
    }

    numeroAlumnos() {
        return this.alumnos.length;
    }
}