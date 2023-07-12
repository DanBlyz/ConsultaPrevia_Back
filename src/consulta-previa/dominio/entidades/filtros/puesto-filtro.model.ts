import { AutoMap } from '@automapper/classes';

export class PuestoFiltro {
  @AutoMap()
  nombre?: string;

  @AutoMap()
  nivelJerarquico?: number;

  @AutoMap()
  estaActivo?: boolean;

  @AutoMap()
  uniOrganizacionalId?: number;
}
