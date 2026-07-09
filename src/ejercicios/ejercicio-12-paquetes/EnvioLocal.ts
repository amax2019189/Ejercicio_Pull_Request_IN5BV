import { Paquete } from "./Paquete";

class EnvioLocal extends Paquete {

    constructor(public id: number, public emisor: string, public descripcion: string, public direccion: string, public precioEnvio: number, public peso: number ){
        super(id,emisor,peso,precioEnvio)
    }






}
