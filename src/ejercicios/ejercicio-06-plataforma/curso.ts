export abstract class Cursos{
        protected nombre: string;
        protected precioBase: number;
        protected duracionHoras: number;
    constructor(nombre: string, precioBase: number, duracionHoras: number){
        this.nombre = nombre;
        this.precioBase = precioBase;
        this.duracionHoras = duracionHoras;
    }
}