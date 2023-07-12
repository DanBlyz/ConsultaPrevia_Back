import { AutoMap } from '@automapper/classes';

export class CuentaFiltro {
  @AutoMap()
  codigo?: string;

  @AutoMap()
  modoAutenticacion?: string;

  @AutoMap()
  nombre?: string;

  @AutoMap()
  estaAutorizada?: boolean;

  @AutoMap()
  estaBloqueada?: boolean;
}
