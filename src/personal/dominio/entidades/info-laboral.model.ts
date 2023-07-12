import { AutoMap } from '@automapper/classes';

export class InfoLaboral {
  @AutoMap()
  id: number;

  @AutoMap()
  tipoLaboral: string;

  @AutoMap()
  correoInstitucional?: string;

  @AutoMap()
  numInterno?: string;

  @AutoMap()
  estado: string;

  @AutoMap()
  cuenta?: string;

  @AutoMap()
  uniOrganizacionalId: number;

  @AutoMap()
  puestoId: number;

  @AutoMap()
  uniOrganizacionalNombre?: string;

  @AutoMap()
  puestoNombre?: string;

  @AutoMap()
  sePuedeModificar: boolean;

  @AutoMap()
  sePuedeEliminar: boolean;
}
