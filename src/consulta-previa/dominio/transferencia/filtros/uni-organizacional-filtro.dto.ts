import { AutoMap } from '@automapper/classes';
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsNumber,
  IsPositive,
} from 'class-validator';

import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';

export class UniOrganizacionalFiltroDto extends FiltroBaseDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  codigo?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  sigla?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  nombre?: string;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  estaActiva?: boolean;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  uniOrganizacionalSuperiorId?: number;
}
