import { AutoMap } from '@automapper/classes';

import { Grupo, RolCuenta } from '.';

export class Rol {
  @AutoMap()
  id: number;

  @AutoMap()
  codigo: string;

  @AutoMap()
  nombre: string;

  @AutoMap()
  grupoId: number;

  @AutoMap()
  grupo: Grupo;

  @AutoMap()
  grupoCodigo?: string;

  @AutoMap()
  grupoNombre?: string;

  @AutoMap()
  listaRolCuenta?: RolCuenta[];

  @AutoMap()
  sePuedeModificar: boolean;

  @AutoMap()
  sePuedeEliminar: boolean;
}
