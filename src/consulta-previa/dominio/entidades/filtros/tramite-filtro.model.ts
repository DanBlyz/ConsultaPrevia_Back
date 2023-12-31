import { AutoMap } from '@automapper/classes';

export class TramiteFiltro {

  @AutoMap()
  id?: number;

  @AutoMap()
  correlativo?: string;
  
  @AutoMap()
  codigoUnico?: number;

  @AutoMap()
  areaMinera?: string;

  @AutoMap()
  clasificacion?: string;

  @AutoMap()
  nroCuadricula?: number;

  @AutoMap()
  departamento?: string;

  @AutoMap()
  provincia?: string;

  @AutoMap()
  municipio?: string;

  @AutoMap()
  estado?: string;

  @AutoMap()
  estadoAccion?: string;

}
