import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsNumber, IsPositive } from 'class-validator';

import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';

export class PersonaFiltroDto extends FiltroBaseDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  primApellido?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  segApellido?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  nombre?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  numDocumento?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  expedicion?: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  uniOrganizacionalId?: number;
}
