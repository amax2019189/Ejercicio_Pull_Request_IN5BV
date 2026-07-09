import { Paquete } from "./Paquete";

export class EnvioInternacional extends Paquete{
    constructor(public id: number, public emisor: string, public descripcion: string,public pais: string, public depártamento: string, public direccion: string, public precioEnvio: number, public peso: number )
    {  
        super(id, emisor, peso, precioEnvio)
    }

}