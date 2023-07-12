import { AutoMap } from '@automapper/classes';

export class ViajeFiltro {

  @AutoMap()
  id?: number;

  @AutoMap()
  fk_idActos?: number;

  @AutoMap()
  fechaInicio?: Date;
  
  @AutoMap()
  fechaFin?: Date;

  @AutoMap()
  descripcion?: string;

  @AutoMap()
  nroFormulario?: string;

  @AutoMap()
  formularioPdf?: string;

}
