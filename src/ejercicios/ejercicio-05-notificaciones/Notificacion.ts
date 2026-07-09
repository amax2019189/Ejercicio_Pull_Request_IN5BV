export abstract class Notificacion{
    constructor(
        public destinatario : string,
        public asunto : string,
        public fechaEnvio : Date
    ){}

    abstract validarDestinatario(): boolean;
    abstract enviar(mensaje: string): void;

    mostrarInformacion():void{
        console.log (`destinatario: ${this.destinatario},asunto: ${this.asunto}`);
    }
}