import { AutoMap } from '@automapper/classes';

export class ParametroFiltro {
  @AutoMap()
  tipo?: string;

  @AutoMap()
  valor?: string;

  @AutoMap()
  texto?: string;

  @AutoMap()
  estaActivo?: boolean;
}
