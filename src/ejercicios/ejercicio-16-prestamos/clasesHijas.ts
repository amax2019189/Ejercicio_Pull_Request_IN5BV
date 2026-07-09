import { Prestamos } from "./clasePadre";

export class PrestamoPersonal extends Prestamos {
    constructor(
        public monto: number,
        public interes: number,
        public plazo: number,
        public objeto: string
    ) {} 
    
    calcularCuotaMensual(): number {

    }
    calcularInteresTotal(): number {

    }
    mostrarInformacion(): void {

    }

    validarMonto(): boolean {

    }
}


export class PrestamoVehiculo extends Prestamos {
    calcularCuotaMensual(): number {

    }
    calcularInteresTotal(): number {

    }
    mostrarInformacion(): void {

    }

    validarMonto(): boolean {
        
    }
}


export class PrestamoHipotecario extends Prestamos {
    calcularCuotaMensual(): number {

    }
    calcularInteresTotal(): number {

    }
    mostrarInformacion(): void {

    }

    validarMonto(): boolean {
        
    }
}