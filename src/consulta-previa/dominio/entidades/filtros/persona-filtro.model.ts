import { AutoMap } from '@automapper/classes';

export class PersonaFiltro {
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
  uniOrganizacionalId?: number;
}
