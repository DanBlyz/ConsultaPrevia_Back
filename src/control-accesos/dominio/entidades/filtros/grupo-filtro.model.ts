import { AutoMap } from '@automapper/classes';

export class GrupoFiltro {
  @AutoMap()
  codigo?: string;

  @AutoMap()
  nombre?: string;

  @AutoMap()
  descripcion?: string;
}
