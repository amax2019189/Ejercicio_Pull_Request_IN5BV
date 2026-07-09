export class Transporte {
    
    constructor(
        public id: string,
        public capacidad: number,
        public tarifaBase: number
    ) {}


    calcularTarifa(): number {
        return this.tarifaBase;
    }

    iniciarViaje(): void {
        console.log(`El transporte ${this.id} inició su viaje.`);
    }

    finalizarViaje(): void {
        console.log(`El transporte ${this.id} finalizó su viaje.`);
    }

    mostrarInformacion(): void {
        console.log(`Transporte: ${this.id} | Capacidad: ${this.capacidad} | Tarifa Base: Q${this.tarifaBase}`);
    }
}

// las clases hijas

export class Bus extends Transporte {
}

export class Taxi extends Transporte {
    constructor(id: string, capacidad: number, tarifaBase: number, public kilometros: number) {
        super(id, capacidad, tarifaBase);
    }

    calcularTarifa(): number {
        return this.tarifaBase + (this.kilometros * 5); 
    }
}

export class Metro extends Transporte {
    constructor(id: string, capacidad: number, tarifaBase: number, public estaciones: number) {
        super(id, capacidad, tarifaBase);
    }

    calcularTarifa(): number {
        return this.tarifaBase + (this.estaciones * 1); 
    }
}