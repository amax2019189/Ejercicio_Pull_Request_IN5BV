export abstract class Habitacion {
    constructor(
        public numero: number,
        public percioPorNoche: number,
        public capacidad: number
    ) {}

    abstract calcularCostoReserva(noches: number): number;
    abstract aplicarServicioExtra(): number;

    mostrarInformacion(): void {
        console.log(`Habitacion: #{this.numero} | Precio/Noche: Q{this.precioPorNoche} | Capacidad: ${this.capacidad} personas`);
    }
}
