import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsNumber } from 'class-validator';

import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';

export class SujetoIdentificadoFiltroDto extends FiltroBaseDto {
  @AutoMap()
  @IsNumber()
  @IsOptional()
  id?: number;

  @AutoMap()
  @IsNumber()
  @IsOptional()
  fk_idInforme?: number;

  @AutoMap()
  @IsString()
  @IsOptional()
  comunidad?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  representante?: string;

}
