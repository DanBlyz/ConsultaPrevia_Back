import { AutoMap } from '@automapper/classes';

export class PuestoPersona {
  @AutoMap()
  id: number;

  @AutoMap()
  tipoMovilidad: string;

  @AutoMap()
  tipoLaboral: string;

  @AutoMap()
  fecInicio: Date;

  @AutoMap()
  fecConclusion?: Date;

  @AutoMap()
  esInterinato: boolean;

  @AutoMap()
  tieneDesvinculacion: boolean;

  @AutoMap()
  estado: string;

  @AutoMap()
  puestoId?: number;

  @AutoMap()
  personaId: number;

  @AutoMap()
  uniOrganizacionalId: number;

  @AutoMap()
  puestoNombre?: string;

  @AutoMap()
  uniOrganizacionalNombre: string;

  @AutoMap()
  sePuedeModificar: boolean;

  @AutoMap()
  sePuedeEliminar: boolean;
}
