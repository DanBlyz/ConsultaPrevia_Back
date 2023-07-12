import { AutoMap } from '@automapper/classes';

export class Usuario {
  @AutoMap()
  id: number;

  @AutoMap()
  nombre: string;

  @AutoMap()
  apellido: string;

  @AutoMap()
  nomPublico: string;

  @AutoMap()
  correoElectronico: string;

  @AutoMap()
  codCuenta: string;

  @AutoMap()
  sePuedeModificar: boolean;

  @AutoMap()
  sePuedeEliminar: boolean;
}
