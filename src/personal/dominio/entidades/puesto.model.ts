import { AutoMap } from '@automapper/classes';

export class Puesto {
  @AutoMap()
  id: number;

  @AutoMap()
  nombre: string;

  @AutoMap()
  descripcion: string;

  @AutoMap()
  nivelJerarquico: number;

  @AutoMap()
  estaActivo: boolean;

  @AutoMap()
  uniOrganizacionalId: number;

  @AutoMap()
  uniOrganizacionalNombre: string;

  @AutoMap()
  sePuedeModificar: boolean;

  @AutoMap()
  sePuedeEliminar: boolean;
}
