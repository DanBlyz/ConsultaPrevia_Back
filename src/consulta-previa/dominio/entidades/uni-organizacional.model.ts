import { AutoMap } from '@automapper/classes';

export class UniOrganizacional {
  @AutoMap()
  id: number;

  @AutoMap()
  sigla: string;

  @AutoMap()
  nombre: string;

  @AutoMap()
  estaActiva: boolean;
}
