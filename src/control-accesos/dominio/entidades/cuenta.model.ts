import { AutoMap } from '@automapper/classes';

import { RolCuenta } from '.';

export class Cuenta {
  @AutoMap()
  id: number;

  @AutoMap()
  codigo: string;

  @AutoMap()
  modoAutenticacion: string;

  @AutoMap()
  nombre: string;

  @AutoMap()
  clave: string;

  @AutoMap()
  contrasenia: string;

  @AutoMap()
  estaAutorizada: boolean;

  @AutoMap()
  instUltSesion?: Date;

  @AutoMap()
  numIntFallidos: number;

  @AutoMap()
  estaBloqueada: boolean;

  @AutoMap()
  instUltBloqueo?: Date;

  @AutoMap()
  listaRolCuenta?: RolCuenta[];

  @AutoMap()
  sePuedeModificar: boolean;

  @AutoMap()
  sePuedeEliminar: boolean;
}
