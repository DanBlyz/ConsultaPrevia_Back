import { AutoMap } from '@automapper/classes';
import { Reunion } from './reunion.model';

export class Notificacion {
    @AutoMap()
    id: number;
  
    @AutoMap()
    fk_idTramite: number;
  
    @AutoMap()
    notificado: string;
    
    @AutoMap()
    direccionDpto: string;
  
    @AutoMap()
    notificacionPdf: string;

    @AutoMap()
    flujo: string;

    @AutoMap()
    representanteMinero: boolean;

    @AutoMap()
    representanteComunidad: boolean;

    @AutoMap()
    sifde: boolean;
    
    @AutoMap()
    comunidad?: string;

    @AutoMap(() => [Reunion])
    listaReunion?: Reunion[];
  
}
