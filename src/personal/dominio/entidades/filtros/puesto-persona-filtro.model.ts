import { AutoMap } from '@automapper/classes';

export class PuestoPersonaFiltro {
  @AutoMap()
  tipoMovilidad?: string;

  @AutoMap()
  tipoLaboral?: string;

  @AutoMap()
  esInterinato?: boolean;

  @AutoMap()
  estado?: string;

  @AutoMap()
  puestoId?: number;

  @AutoMap()
  personaId?: number;

  @AutoMap()
  uniOrganizacionalId?: number;
}
