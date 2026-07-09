export class Vehiculo {
    marca: string;
    placa: string;
    color: string;
    precio: number;

    constructor( marca : string,  placa : string, color: string, precio: number){
    this.marca = marca;
    this.placa = placa;
    this.color = color;
    this.precio = precio;
    }
 
    calcularPrecioFinal(): number{
        return this.precio
    }

    aplicarDescuento( descuento : number ): number{
        descuento = 0;
        const precioDescontado = this.precio - descuento;
        return precioDescontado;
    }

    mostrarInformacion(): void{
    
    }
}

