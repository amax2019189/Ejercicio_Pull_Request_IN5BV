// --- CLASE PADRE ABSTRACTA ---
export abstract class Transporte {
    protected idVehiculo: string;
    protected capacidadPasajeros: number;
    protected tarifaBase: number;
    protected enViaje: boolean;

    constructor(idVehiculo: string, capacidad: number, tarifaBase: number) {
        this.idVehiculo = idVehiculo;
        this.capacidadPasajeros = capacidad;
        this.tarifaBase = tarifaBase;
        this.enViaje = false;
    }

    abstract calcularTarifa(): number;

    iniciarViaje(): void {
        this.enViaje = true;
        console.log(`[INICIO] El transporte ${this.idVehiculo} ha iniciado su recorrido.`);
    }

    finalizarViaje(): void {
        this.enViaje = false;
        console.log(`[FIN] El transporte ${this.idVehiculo} ha llegado a su destino.`);
    }

    mostrarInformacion(): void {
        console.log(`--- Información del Transporte ---`);
        console.log(`ID Vehículo: ${this.idVehiculo}`);
        console.log(`Capacidad: ${this.capacidadPasajeros} pasajeros`);
        console.log(`Tarifa Base: Q${this.tarifaBase}`);
        console.log(`Estado: ${this.enViaje ? 'En viaje' : 'Detenido'}`);
    }
}

// --- CLASES HIJAS ---

export class Bus extends Transporte {
    public ruta: string;

    constructor(idVehiculo: string, capacidad: number, tarifaBase: number, ruta: string) {
        super(idVehiculo, capacidad, tarifaBase);
        this.ruta = ruta;
    }

    calcularTarifa(): number {
        return this.tarifaBase;
    }

    mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Tipo: Bus | Ruta: ${this.ruta}\n`);
    }
}

export class Taxi extends Transporte {
    public precioPorKm: number;
    public kilometrosRecorridos: number;

    constructor(idVehiculo: string, capacidad: number, tarifaBase: number, precioPorKm: number) {
        super(idVehiculo, capacidad, tarifaBase);
        this.precioPorKm = precioPorKm;
        this.kilometrosRecorridos = 0;
    }

    setKilometros(km: number): void {
        this.kilometrosRecorridos = km;
    }

    calcularTarifa(): number {
        return this.tarifaBase + (this.kilometrosRecorridos * this.precioPorKm);
    }

    mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Tipo: Taxi | Precio/Km: Q${this.precioPorKm}\n`);
    }
}

export class Metro extends Transporte {
    public linea: string;
    public estacionesRecorridas: number;
    public recargoPorEstacion: number;

    constructor(idVehiculo: string, capacidad: number, tarifaBase: number, linea: string, recargoPorEstacion: number) {
        super(idVehiculo, capacidad, tarifaBase);
        this.linea = linea;
        this.recargoPorEstacion = recargoPorEstacion;
        this.estacionesRecorridas = 0;
    }

    setEstaciones(estaciones: number): void {
        this.estacionesRecorridas = estaciones;
    }

    calcularTarifa(): number {
        return this.tarifaBase + (this.estacionesRecorridas * this.recargoPorEstacion);
    }

    mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Tipo: Metro | Línea: ${this.linea}\n`);
    }
}