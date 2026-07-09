import { Inscripcion } from "./inscripciones";

export abstract class inscripcionNuevoIngreso extends Inscripcion {
    private cargoMatricula : number = 50;
    idInscripcion: any;
    constructor(
        idInscripcion : string,
        nombreEstudiante : string,
        costoBase : number,
        
    ) {super(idInscripcion, 
        nombreEstudiante, 
        costoBase);
    } 

    aplicarDescuento(): number {
        return  0;
    }

    calcularPago(): number {
        return this.costoBase + this.cargoMatricula - this.aplicarDescuento ();
    }

    mostrarInformacion(): void {
        console.log (` Nuevo Ingreso `   );
        console.log (`ID: ${this.idInscripcion} | Estudiante: ${this.nombreEstudiante}`);
        console.log (`Costo Base: ${this.costoBase} | Descuento : ${this.aplicarDescuento()}`);
        console.log (`Total a pagar : $${this.calcularPago()}`)
        
    }
}