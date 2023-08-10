import { AutoMap } from '@automapper/classes';
import { Resolucion } from './resolucion.model';
import { Providencia } from './providencia.model';
import { Informe } from './informe.model';
import { Notificacion } from './notificacion.model';
import { ActoAdministrativo } from './actos-administrativos.model';

export class Tramite {
  @AutoMap()
  id: number;

  @AutoMap()
  correlativo: string;
  
  @AutoMap()
  codigoUnico: number;

  @AutoMap()
  areaMinera: string;

  @AutoMap()
  clasificacion: string;

  @AutoMap()
  nroCuadricula: number;

  @AutoMap()
  departamento: string;

  @AutoMap()
  provincia: string;

  @AutoMap()
  municipio: string;

  @AutoMap()
  estado: string;

  @AutoMap()
  estadoAccion: string;

  @AutoMap(() => [Resolucion])
  listaResolucion?: Resolucion[];

  @AutoMap(() => [Providencia])
  listaProvidencia?: Providencia[];

  @AutoMap(() => [Informe])
  listaInforme?: Informe[];

  @AutoMap(() => [Notificacion])
  listaNotificacion?: Notificacion[];

  @AutoMap(() => [ActoAdministrativo])
  listaActoAdministrativo?: ActoAdministrativo[];
}
