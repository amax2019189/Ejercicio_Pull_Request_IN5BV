// Clase padre
export abstract class Ticket {
    constructor(
        public codigo: number,
        public propietario: string,
        public lugar: string,
        public estado: string = 'sin expirar'
    ) {}
 
    abstract procesarFlujo(): void;
    abstract cerrarTicket(): void;

    cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    console.log(`Ticket #${this.codigo} cambio de estado: ${this.estado}`);
    }

    mostrarInformacion(): void {
        console.log(`Ticket #${this.codigo} | Propietario: ${this.propietario} | Área: ${this.lugar} | Estado: ${this.estado}`);
    }
}
 