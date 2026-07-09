//DavidToc_2025195

export abstract class Inscripcion {
    constructor(
        public nombreEstudiante: string,
        public carnet: string,
        protected costoBase: number 
    ) {}

    abstract calcularPago(): number;
    abstract aplicarDescuento(): number; 
    abstract mostrarInformacion(): void;


    validarDocumentos(): boolean {
        console.log(`[Validación] Verificando documentos para: ${this.nombreEstudiante}`);
        return true;
    }
}

