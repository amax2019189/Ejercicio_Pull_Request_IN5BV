import { Inscripcion } from "./inscripciones";

export abstract class InscripcionReingreso extends Inscripcion{
    constructor(
        idInscripcion : string,
        nombreEstudiante : string,
        costoBase : number,
        
    ) {super(idInscripcion, 
        nombreEstudiante, 
        costoBase);
    } 

}