import { AutoMap } from '@automapper/classes';

export class Parametro {
  @AutoMap()
  id: number;

  @AutoMap()
  tipo: string;

  @AutoMap()
  orden: number;

  @AutoMap()
  valor: string;

  @AutoMap()
  texto: string;

  @AutoMap()
  estaActivo: boolean;

  @AutoMap()
  sePuedeModificar: boolean;

  @AutoMap()
  sePuedeEliminar: boolean;
}
