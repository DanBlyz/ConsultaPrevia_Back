import { Resolucion } from './resolucion.model';
import { Providencia } from './providencia.model';
import { Informe } from './informe.model';
import { Notificacion } from './notificacion.model';
import { ActoAdministrativo } from './actos-administrativos.model';
export declare class Tramite {
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
    listaResolucion?: Resolucion[];
    listaProvidencia?: Providencia[];
    listaInforme?: Informe[];
    listaNotificacion?: Notificacion[];
    listaActoAdministrativo?: ActoAdministrativo[];
}