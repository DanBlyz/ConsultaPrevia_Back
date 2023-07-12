import { AutoMap } from '@automapper/classes';

import { Cuenta, Rol } from '.';

export class RolCuenta {
  @AutoMap()
  id: number;

  @AutoMap()
  instRegistro: Date;

  @AutoMap()
  fecInicio: Date;

  @AutoMap()
  fecConclusion: Date;

  @AutoMap()
  rolId: number;

  @AutoMap()
  cuentaId: number;

  @AutoMap()
  rol: Rol;

  @AutoMap()
  cuenta: Cuenta;

  @AutoMap()
  rolNombre?: string;

  @AutoMap()
  rolGrupoCodigo?: string;

  @AutoMap()
  rolGrupoNombre?: string;

  @AutoMap()
  sePuedeModificar: boolean;

  @AutoMap()
  sePuedeEliminar: boolean;
}
