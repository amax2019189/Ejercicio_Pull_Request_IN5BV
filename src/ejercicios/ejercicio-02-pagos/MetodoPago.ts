export class MetodoPago{
    nombrePago:string = ""
    monto:number = 0
    pagoRealizado = true


    constructor(nombrePago:string,monto:number,pagoRealizado:true){
        this.nombrePago=nombrePago;
        this.pagoRealizado=pagoRealizado;
        this.monto=monto
    }

    procesarPago():void{

    }
}