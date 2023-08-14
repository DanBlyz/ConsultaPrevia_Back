import { AuditoriaEntity } from './base/auditoria.entity';
import { ResolucionEntity } from './resolucion.entity';
import { ProvidenciaEntity } from './providencia.entity';
import { NotificacionEntity } from './notificacion.entity';
import { ActoAdministrativoEntity } from './actos-administrativos.entity';
import { DocumentoEntity } from './documento.entity';
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
    listaDocumento: DocumentoEntity[];
    listaNotificacion: NotificacionEntity[];
    listaActoAdministrativo: ActoAdministrativoEntity[];
}
