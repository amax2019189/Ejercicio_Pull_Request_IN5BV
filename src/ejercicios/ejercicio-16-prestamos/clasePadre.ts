export abstract class Prestamos {
    constructor(
        public monto: number,
        public interes: number,
        public plazo: number
    ) {}
}