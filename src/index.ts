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
    19. Sistema de transporte público
    20. Sistema de mantenimiento técnico
    21. Sistema de facturación
    22. Sistema de clínicas médicas
    23. Sistema de gimnasio
    24. Sistema de delivery
    25. Sistema de inscripción estudiantil
*/

import { Habitacion } from "./ejercicios/ejercicio-11-hoteles/Habitacion";
import { HabitacionDoble } from "./ejercicios/ejercicio-11-hoteles/HabitacionDoble";
import { HabitacionSimple } from "./ejercicios/ejercicio-11-hoteles/HabitacionSimple";
import { Suite } from "./ejercicios/ejercicio-11-hoteles/Suite";


const habitaciones: Habitacion[] = [
    new HabitacionSimple(101, 300),
    new HabitacionDoble(201, 400),
    new Suite(301, 800, true)
];

const noches = 3;
habitaciones.forEach(h => {
    h.mostrarInformacion();
    console.log(`Costo de reserva (${noches} noches): Q${h.calcularCostoReserva(noches)}`);
});
