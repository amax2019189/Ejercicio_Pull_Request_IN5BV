import { Ticket } from "./Tickets";

export class TicketReclutamiento extends Ticket{
    constructor(codigo:number, visitante:string, public reclutador: string, lugar: string = "Cidad"){
        super(codigo,visitante,lugar)
    }

    procesarFlujo(): void {
        console.log(`Flujo para el reclutamiento: \n 1.- Preparacion del ${this.reclutador}, \n 2. Capacitación del ${this.visitante}, \n 3. Prueba del poligrafo, \n 4. Analisis del poligrafio por el ${this.reclutador}`)
    }

    cerrarTicket(): void {
        this.cambiarEstado('Reclutamiento exitoso')
        console.log(`el Ticket con el codigo ${this.codigo} sera cerrado`)
    }

    mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`El analisis de los resultados de la prueba del poligrafo salieron de manera excelente, y por lo tanto el ${this.reclutador}. \n Le ha dado el visto bueno`)

    }

}