import { Habitacion } from "./Habitacion";

export class HabitacionDoble extends Habitacion{
    constructor(numero: number, precioPorNoche: number){
        super(numero, precioPorNoche, 2 );
    }

    aplicarServicioExtra(): number {
        return 100;
    }

    calcularCostoReserva(noches: number): number {
        return(this.percioPorNoche * noches) + this.aplicarServicioExtra();
    }

    mostrarInformacion(): void {
        super.mostrarInformacion
        console.log(`Tipo: Doble | Servicio Extra: Q${this.aplicarServicioExtra()}`)
    }
}