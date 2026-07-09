import { Habitacion } from "./Habitacion";

export class Suite extends Habitacion {
    constructor(numero: number, precioPorNoche: number, public tieneJacuzzi: boolean = true) {
        super(numero, precioPorNoche, 4); 
    }

    aplicarServicioExtra(): number {
        let extra = 300;
        if (this.tieneJacuzzi) extra += 150;
        return extra;
    }

    calcularCostoReserva(noches: number): number {
        return(this.percioPorNoche * noches * 4)+ this.aplicarServicioExtra();
    }

    mostrarInformacion(): void {
        console.log(`Tipo: Suite | Jacuzzi: ${this.tieneJacuzzi} "Si":"No" | ServicioExtra: ${this.aplicarServicioExtra}`)
    }
 
}