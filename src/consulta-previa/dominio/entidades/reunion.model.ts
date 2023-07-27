import { AutoMap } from '@automapper/classes';
import { Notificacion } from './notificacion.model';

export class Reunion {
    @AutoMap()
    id: number;
  
    @AutoMap()
    fk_idNotificacion: number;
  
    @AutoMap()
    nroReunion: string;
    
    @AutoMap()
    acuerdo: boolean;
  
    @AutoMap()
    motivo: string;
  
    @AutoMap()
    reunionRealizada: boolean;
  
    @AutoMap()
    actaReunionPdf: string;

    @AutoMap()
    estado: string;

    @AutoMap()
    flujo: string;

    @AutoMap(() => [Notificacion])
    notificacion?: Notificacion;
}
