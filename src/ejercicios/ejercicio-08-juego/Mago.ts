import { Personaje } from "./Personaje";

export class Mago extends Personaje {
    atacar() : number {
        const danio = 40;
        console.log('${this.nombre} lanza un hechizo e inflige ${danio} de daño');
        return danio;
    }    
    usarHabilidadEspecial(): void {
        
    }
}