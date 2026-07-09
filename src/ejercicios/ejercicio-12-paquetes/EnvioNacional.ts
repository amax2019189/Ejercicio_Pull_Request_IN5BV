import { Paquete } from "./Paquete";

export class EnvioNacional extends Paquete{

    constructor(public id: number, public emisor: string, public descripcion: string, public departamento: string, public direccion: string, public precioEnvio: number, public peso: number)
    {
        super(id, emisor, peso, precioEnvio)   
    }





}