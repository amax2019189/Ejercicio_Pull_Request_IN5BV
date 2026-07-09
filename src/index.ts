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

import { TicketPoligrafia } from "./ejercicios/ejercicio-10-tickets/TicketPoligrafia"
import { TicketReclutamiento } from "./ejercicios/ejercicio-10-tickets/TicketReclutamiento"
import { TicketRRHH } from "./ejercicios/ejercicio-10-tickets/TicketRRHH"
import { Ticket } from "./ejercicios/ejercicio-10-tickets/Tickets"

const  tickets: Ticket[] = [

    new TicketReclutamiento(1,"Juan cajchun","cdad quetzal"),
    new TicketRRHH(10034,"Cristian Perez","Induccion programacional"),
    new TicketPoligrafia(203,"Jaime Martinez","Alejandro Max","Kinal")

];

tickets.forEach( ticket => {
    ticket.mostrarInformacion();
    ticket.procesarFlujo();
    console.log("esperando dartos...")
    ticket.cerrarTicket();

    console.log(ticket);
})
