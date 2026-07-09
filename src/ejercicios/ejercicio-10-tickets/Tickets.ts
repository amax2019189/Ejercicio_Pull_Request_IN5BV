// Clase padre
export abstract class Ticket {
    constructor(
        public codigo: number,
        public visitante: string,
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
        console.log(`Ticket #${this.codigo} | Visitante: ${this.visitante} | Área: ${this.lugar} | Estado: ${this.estado}`);
    }
}
 