import { AutoMap } from '@automapper/classes';

export class PersonaFiltro {
  @AutoMap()
  codigo?: string;

  @AutoMap()
  primApellido?: string;

  @AutoMap()
  segApellido?: string;

  @AutoMap()
  nombre?: string;

  @AutoMap()
  numDocumento?: string;

  @AutoMap()
  expedicion?: string;

  @AutoMap()
  estadoLaboral?: string;

  @AutoMap()
  uniOrganizacionalId?: number;
}
