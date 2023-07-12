import { AutoMap } from '@automapper/classes';

export class UsuarioFiltro {
  @AutoMap()
  nombre?: string;

  @AutoMap()
  apellido?: string;

  @AutoMap()
  nomPublico?: string;

  @AutoMap()
  correoElectronico?: string;
}
