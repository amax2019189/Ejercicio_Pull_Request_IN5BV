import { Personaje } from "./Personaje";

export class Arquero extends Personaje {
    atacar() : number {
        const danio = 30;
        console.log('${this.nombre} incrusta una flecha e inflige ${danio} de daño');
        return danio;
    }    
    usarHabilidadEspecial(): void {
        
    }
}