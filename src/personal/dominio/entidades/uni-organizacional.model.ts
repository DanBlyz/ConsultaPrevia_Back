import { AutoMap } from '@automapper/classes';

export class UniOrganizacional {
  @AutoMap()
  id: number;

  @AutoMap()
  codigo: string;

  @AutoMap()
  sigla: string;

  @AutoMap()
  nombre: string;

  @AutoMap()
  estaActiva: boolean;

  @AutoMap()
  uniOrganizacionalSuperiorId?: number;

  @AutoMap()
  uniOrganizacionalSuperiorNombre: string;

  @AutoMap()
  numPuestos: number;

  @AutoMap()
  sePuedeModificar: boolean;

  @AutoMap()
  sePuedeEliminar: boolean;
}
