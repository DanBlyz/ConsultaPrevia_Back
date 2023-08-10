import { AuditoriaEntity } from './base/auditoria.entity';
import { ResolucionEntity } from './resolucion.entity';
import { ProvidenciaEntity } from './providencia.entity';
import { InformeEntity } from './informe.entity';
import { NotificacionEntity } from './notificacion.entity';
import { ActoAdministrativoEntity } from './actos-administrativos.entity';
export declare class TramiteEntity extends AuditoriaEntity {
    id: number;
    correlativo: string;
    codigoUnico: number;
    areaMinera: string;
    clasificacion: string;
    nroCuadricula: number;
    departamento: string;
    provincia: string;
    municipio: string;
    estado: string;
    estadoAccion: string;
    listaResolucion: ResolucionEntity[];
    listaProvidencia: ProvidenciaEntity[];
    listaInforme: InformeEntity[];
    listaNotificacion: NotificacionEntity[];
    listaActoAdministrativo: ActoAdministrativoEntity[];
}
