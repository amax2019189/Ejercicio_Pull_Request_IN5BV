import { Empleado } from "./Empleado";

export abstract class EmpleadoFijo extends Empleado {

calcularPago(): number{
    return this.pago = 5000;
}

mostrarInformacion(): void {
    return ;
}

calcularBonificacion(): number {
    return this.pago + 50;
}
}