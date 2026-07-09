export class Personaje {
    nombre: string;
    salud: number;
    puntosMagia: number;
    constructor(
        nombre: string,
        salud: number,
        puntosMagia: number,
    ) {
        this.nombre = nombre;
        this.salud = salud;
        this.puntosMagia = puntosMagia;
    }
    recibirDanio(danio: number): void {
        this.salud -= danio;
        if (this.salud < 0) this.salud = 0;
        console.log('${this.nombre} recibio daño: ${danio}. Salud: ${this.salud}')
    }
    mostrarInformacion(): void {
        console.log('${this.nombre} - Salud: ${this.salud} | PM: ${this.puntosMagia}');
    }

    estaVivo(): boolean {
        return this.salud < 0;
    }

}