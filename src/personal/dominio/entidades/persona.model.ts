import { AutoMap } from '@automapper/classes';

import { InfoLaboral, PuestoPersona } from '.';

export class Persona {
  @AutoMap()
  id: number;

  @AutoMap()
  codigo: string;

  @AutoMap()
  primApellido: string;

  @AutoMap()
  segApellido?: string;

  @AutoMap()
  nombre: string;

  @AutoMap()
  numDocumento: string;

  @AutoMap()
  expedicion: string;

  @AutoMap()
  fecNacimiento: Date;

  @AutoMap()
  correoPersonal: string;

  @AutoMap()
  celularPersonal: string;

  @AutoMap()
  infoLaboral?: InfoLaboral;

  @AutoMap()
  interinato?: PuestoPersona;

  @AutoMap()
  tieneFotografia: boolean;

  @AutoMap()
  sePuedeModificar: boolean;

  @AutoMap()
  sePuedeEliminar: boolean;
}
