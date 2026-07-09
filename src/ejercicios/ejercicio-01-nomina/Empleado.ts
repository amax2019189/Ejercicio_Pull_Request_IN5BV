// Ejercicio 01 - Oscar Guzmán / 2025422

export abstract class Empleado {
    constructor(
    public nombre: string,
    public codigo: string,
    public pago: number
) 
{}

abstract calcularPago(): number;
abstract mostrarInformacion(): void;
abstract calcularBonificacion(): number;
abstract calcularDescuento(): number;

}