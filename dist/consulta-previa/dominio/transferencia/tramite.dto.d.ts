import { ResolucionDto, ResolucionModificacionDto } from './resolucion.dto';
import { ProvidenciaDto, ProvidenciaModificacionDto } from './providencia.dto';
import { InformeDto } from './informe.dto';
import { NotificacionDto, NotificacionModificacionDto } from './notificacion.dto';
import { ActoAdministrativoDto, ActoAdministrativoModificacionDto } from './actos-administrativos.dto';
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
    listaResolucion?: ResolucionDto[];
    listaProvidencia?: ProvidenciaDto[];
    listaInforme?: InformeDto[];
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
    listaResolucion?: ResolucionModificacionDto[];
    listaProvidencia?: ProvidenciaModificacionDto[];
    listaNotificacion?: NotificacionModificacionDto[];
    listaActoAdministrativo?: ActoAdministrativoModificacionDto[];
}
