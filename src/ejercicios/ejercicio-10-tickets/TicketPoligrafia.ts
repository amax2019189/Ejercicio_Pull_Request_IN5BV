import { Ticket } from "./Tickets";
 
export class TicketPoligrafia extends Ticket{
    constructor(codigo:number, visitante: string, public poligrafo:string, lugar: string, estado: string = "procesando"){
        super(codigo,visitante,lugar);
    } 

    procesarFlujo(): void {
        console.log(`Flujo para el poligrafo: 1.- Preparacion ${this.poligrafo}, \n 2. Examen previo, \n 3. Toma del poligrafo, \n 4. Analisis del ${this.poligrafo}`)
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