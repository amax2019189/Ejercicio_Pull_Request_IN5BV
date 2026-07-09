export class Reportes{
    id:number;
    titulo:string;
    informacion:string;

    constructor( id:number,titulo:string,informacion:string) {
        this.id=id;
        this.titulo=titulo;
        this.informacion=informacion; 
    }
}