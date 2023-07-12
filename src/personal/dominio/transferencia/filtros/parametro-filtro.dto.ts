import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsBoolean } from 'class-validator';

import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';

export class ParametroFiltroDto extends FiltroBaseDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  tipo?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  valor?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  texto?: string;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  estaActivo?: boolean;
}
