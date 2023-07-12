import { AutoMap } from '@automapper/classes';

import { Persona } from '.';

export class Fotografia {
  @AutoMap()
  id: number;

  @AutoMap()
  archivo: string;

  @AutoMap()
  tipoMime: string;

  @AutoMap()
  extension: string;

  @AutoMap()
  tamanio: number;

  @AutoMap()
  persona?: Persona;

  @AutoMap()
  sePuedeModificar: boolean;

  @AutoMap()
  sePuedeEliminar: boolean;
}
