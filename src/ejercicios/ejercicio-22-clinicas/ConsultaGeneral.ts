import PormptSync from "prompt-sync";
import { ConsultaMedica } from "./ConsultaMedica";
import console from "node:console";

export class ConsultaGeneral extends ConsultaMedica {
constructor(
    fecha: string, 
    hora: string, 
    nombrePaciente: string) {
        super(fecha, hora, nombrePaciente);
      }
    public mostrarInformacion(): void {
        console.log(`Consulta General - Fecha: ${this.fecha}, Hora: ${this.hora}, Paciente: ${this.nombrePaciente}`);
      }   
    public generarDiagnostico(): string {
        return `Diagnóstico de la consulta general para el paciente ${this.nombrePaciente}`;
     }      
    public calcularCosto (): number {
        return 100; 
    }
    switch (numero) {
        case 1 info():
            console.log(this.mostrarInformacion);
               
        break;

        default 7:

        console.log("ya no se puede entrar aca");
            break;
    }

}   