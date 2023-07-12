import { AutoMap } from '@automapper/classes';
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsNumber,
  IsPositive,
} from 'class-validator';

import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';

export class PuestoFiltroDto extends FiltroBaseDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  nombre?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  nivelJerarquico?: number;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  estaActivo?: boolean;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  uniOrganizacionalId?: number;
}
