import { AutoMap } from '@automapper/classes';

export class UniOrganizacionalFiltro {
  @AutoMap()
  codigo?: string;

  @AutoMap()
  sigla?: string;

  @AutoMap()
  nombre?: string;

  @AutoMap()
  estaActiva?: boolean;

  @AutoMap()
  uniOrganizacionalSuperiorId?: number;
}
