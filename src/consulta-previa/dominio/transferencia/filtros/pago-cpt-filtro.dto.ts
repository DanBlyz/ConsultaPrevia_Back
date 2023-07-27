import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';

export class PagoCptFiltroDto extends FiltroBaseDto {
  @AutoMap()
  @IsNumber()
  @IsOptional()
  id?: number;

  @AutoMap()
  @IsNumber()
  @IsOptional()
  fk_idActos?: number;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  pagoRealizado?: boolean;

  @AutoMap()
  @IsString()
  @IsOptional()
  flujo?: string;

  @AutoMap()
  @IsNumber()
  @IsOptional()
  diasViaje?: number;

  @AutoMap()
  @IsString()
  @IsOptional()
  tipoViaje?: string;

  @AutoMap()
  @IsNumber()
  @IsOptional()
  montoTotal?: number;

  @AutoMap()
  @IsString()
  @IsOptional()
  apm?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  descripcion?: string;
}
