import { Ticket } from "./Tickets";

export class TicketRRHH extends Ticket{
    constructor(codigo:number, propietario: string, public motivio: string, lugar: string = "RRHH"){
        super(codigo,propietario,lugar);
    }

    procesarFlujo(): void {
        console.log(`Flujo en el area de RRHH: 1.- Se dirije al area de ${this.lugar}, \n 2. nos registramos, \n 3.Induccion al proceso, \n 4. Asignacion de recursos y el motivo: ${this.motivio}`)
    }

    cerrarTicket(): void {
        this.cambiarEstado('Resultado listo')
        console.log(`el Ticket con el codigo ${this.codigo} sera cerrado`)
    }

    mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Examen tipo: Poligrafia | examinador: ${this.poligrafo}`)

    }
}