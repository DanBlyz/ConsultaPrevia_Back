import { ResolucionDto, ResolucionModificacionDto } from './resolucion.dto';
import { ProvidenciaDto, ProvidenciaModificacionDto } from './providencia.dto';
import { NotificacionDto, NotificacionModificacionDto } from './notificacion.dto';
import { ActoAdministrativoDto, ActoAdministrativoModificacionDto } from './actos-administrativos.dto';
import { DocumentoDto } from './documento.dto';
export declare class TramiteDto {
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
    listaResolucion?: ResolucionDto[];
    listaProvidencia?: ProvidenciaDto[];
    listaDocumento?: DocumentoDto[];
    listaNotificacion?: NotificacionDto[];
    listaActoAdministrativo?: ActoAdministrativoDto[];
}
export declare class TramiteCreacionDto {
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
}
export declare class TramiteModificacionDto {
    correlativo?: string;
    codigoUnico?: number;
    areaMinera?: string;
    clasificacion?: string;
    nroCuadricula?: number;
    departamento?: string;
    provincia?: string;
    municipio?: string;
    estado?: string;
    estadoAccion?: string;
    listaResolucion?: ResolucionModificacionDto[];
    listaProvidencia?: ProvidenciaModificacionDto[];
    listaNotificacion?: NotificacionModificacionDto[];
    listaActoAdministrativo?: ActoAdministrativoModificacionDto[];
}
