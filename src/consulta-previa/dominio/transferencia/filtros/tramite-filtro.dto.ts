import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsNumber } from 'class-validator';

import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';

export class TramiteFiltroDto extends FiltroBaseDto {
  @AutoMap()
  @IsNumber()
  @IsOptional()
  id?: number;

  @AutoMap()
  @IsString()
  @IsOptional()
  correlativo?: string;

  @AutoMap()
  @IsNumber()
  @IsOptional()
  codigoUnico?: number;

  @AutoMap()
  @IsString()
  @IsOptional()
  areaMinera?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  clasificacion?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  departamento?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  provincia?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  municipio?: string;
}
