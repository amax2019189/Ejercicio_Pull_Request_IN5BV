import { Habitacion } from "./Habitacion";

export class HabitacionSimple extends Habitacion{

    constructor(numero: number, precioPorNoche: number){
        super(numero, precioPorNoche, 1);
    }

    aplicarServicioExtra(): number {
        return 50;
    }

    calcularCostoReserva(noches: number): number {
        return (this.percioPorNoche * noches) + this.aplicarServicioExtra();
    }

    mostrarInformacion(): void {
        super.mostrarInformacion
        console.log(`Tipo: Simple | Servicio Extra: Q${this.aplicarServicioExtra()}`);
    }
}