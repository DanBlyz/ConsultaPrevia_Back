import { AutoMap } from '@automapper/classes';

export class Persona {
  @AutoMap()
  id: number;

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
}
