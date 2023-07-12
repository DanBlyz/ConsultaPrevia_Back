import { AutoMap } from '@automapper/classes';

import { Rol } from '.';

export class Grupo {
  @AutoMap()
  id: number;

  @AutoMap()
  codigo: string;

  @AutoMap()
  nombre: string;

  @AutoMap()
  descripcion: string;

  @AutoMap(() => [Rol])
  listaRol?: Rol[];

  @AutoMap()
  sePuedeModificar: boolean;

  @AutoMap()
  sePuedeEliminar: boolean;
}
