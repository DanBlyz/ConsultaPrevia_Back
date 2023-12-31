import { AutoMap } from '@automapper/classes';
import { Reunion } from './reunion.model';
import { Tramite } from './tramite.model';

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

    @AutoMap()
    nroReunion?: string;

    @AutoMap(() => [Tramite])
    tramite?: Tramite;

    @AutoMap(() => [Reunion])
    reunion?: Reunion;

}
