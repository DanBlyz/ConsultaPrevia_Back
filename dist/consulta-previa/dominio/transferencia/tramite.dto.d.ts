import { ResolucionDto } from './resolucion.dto';
import { ProvidenciaDto } from './providencia.dto';
import { InformeDto } from './informe.dto';
import { NotificacionDto } from './notificacion.dto';
import { ActoAdministrativoDto } from './actos-administrativos.dto';
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
}
