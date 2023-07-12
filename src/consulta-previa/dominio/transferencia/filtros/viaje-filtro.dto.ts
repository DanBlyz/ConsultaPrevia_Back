import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';

export class ViajeFiltroDto extends FiltroBaseDto {
  @AutoMap()
  @IsNumber()
  @IsOptional()
  id?: number;

  @AutoMap()
  @IsNumber()
  @IsOptional()
  fk_idActos?: number;

  @AutoMap()
  @IsDateString()
  @IsOptional()
  fechaIncio?: Date;

  @AutoMap()
  @IsDateString()
  @IsOptional()
  fechaFin?: Date;

  @AutoMap()
  @IsString()
  @IsOptional()
  descripcion?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  nroFormulario?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  formularioPdf?: string;
}
