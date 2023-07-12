import { AutoMap } from '@automapper/classes';
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsNumber,
  IsPositive,
} from 'class-validator';

import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';

export class PuestoPersonaFiltroDto extends FiltroBaseDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  tipoMovilidad?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  tipoLaboral?: string;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  esInterinato?: boolean;

  @AutoMap()
  @IsString()
  @IsOptional()
  estado?: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  puestoId?: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  personaId?: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  uniOrganizacionalId?: number;
}
