import { Factura } from "./Factura";

export class FacturaConsumidorFinal extends Factura{

    constructor(numeroNit: number, nombreConsumidor : String, fechaConsumo : String, total : number){
        super(numeroNit, nombreConsumidor, fechaConsumo, total )
    }

    calcularSubtotal(total : number): number {
        return this.total;
    }

}
