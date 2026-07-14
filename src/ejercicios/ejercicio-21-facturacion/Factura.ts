export  class Factura{
     public constructor(
        public numeroNit : number,
        public nombreConsumidor : String,
        public fechaConsumo : String,
        public total : number,
        
    ){}

    public calcularSubtotal(total:number) : number{
        return this.total;
    }

    public calcularImpuesto(total : number) : number{
        let impuesto = 0.12;
        let totalIva : number;
        totalIva = total * impuesto;
        return totalIva;
    }

    
}






