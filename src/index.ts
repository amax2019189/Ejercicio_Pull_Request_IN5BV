import { Transporte, Bus, Taxi, Metro } from './ejercicios/ejercicio-19-transporte/ejercicio-19';
/*
    | Ejercicios de Clase |

    1. Sistema de nómina empresarial
    2. Sistema de pagos con validaciones
    3. Gestión de vehiculos en venta
    4. Inventario con productos especializados
    5. Sistema de notificaciones multicanal
    6. Plataforma de cursos online
    7. Sistema bancario
    8. Videojuego RPG
    9. Sistema de reportes empresariales
    10. Sistema de tickets para visitas empresariales
    11. Sistema de reservas de hoteles
    12. Sistema de envíos de paquetes
    13. Sistema de biblioteca
    14. Sistema de parqueo
    15. Sistema de ventas de boletos
    16. Sistema de préstamos bancarios
    17. Sistema de restaurantes
    18. Sistema de seguros
    19. Sistema de transporte público*/

    const miBus = new Bus("Bus-1", 50, 5);
    const miTaxi = new Taxi("Taxi-2", 4, 15, 10);
    const miMetro = new Metro("Metro-3", 300, 3, 8); 
    const transportes: Transporte[] = [miBus, miTaxi, miMetro];

    console.log(" ----------------------")
    console.log(" SISTEMA DE TRANSPORTE ");
    console.log(" ----------------------")

    transportes.forEach(vehiculo => {
        vehiculo.mostrarInformacion();
        vehiculo.iniciarViaje();
        vehiculo.finalizarViaje();
        console.log(`Total a cobrar: Q${vehiculo.calcularTarifa()}\n`);
        console.log(" ----------------------")
    });

/*
    20. Sistema de mantenimiento técnico
    21. Sistema de facturación
    22. Sistema de clínicas médicas
    23. Sistema de gimnasio
    24. Sistema de delivery
    25. Sistema de inscripción estudiantil
*/
