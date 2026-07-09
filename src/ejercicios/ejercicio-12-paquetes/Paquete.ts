export  class Paquete {
        id: number
        descripcion: string
        peso: number
        precioEnvio: number

    constructor( id: number, descripcion: string, peso: number, precioEnvio: number){
        this.id = id
        this.descripcion = descripcion
        this.peso = peso
        this.precioEnvio = precioEnvio
    }

    calcularPrecio(peso:number): number{
        this.precioEnvio = peso * 0.50
        return this.precioEnvio
    }












}