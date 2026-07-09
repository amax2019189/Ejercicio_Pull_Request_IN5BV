import { Personaje } from "./Personaje";

export class Guerrero extends Personaje {
    atacar() : number {
        const danio = 25;
        console.log('${this.nombre} da un espadazo e inflige ${danio} de daño');
        return danio;
    }    
    usarHabilidadEspecial(): void {
        
    }
}