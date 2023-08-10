import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsNumber, IsBoolean, IsDateString } from 'class-validator';

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

  @AutoMap()
  @IsString()
  @IsOptional()
  estado?: string;

  @AutoMap()
  @IsNumber()
  @IsOptional()
  transaccion?: number;

  @AutoMap()
  @IsDateString()
  @IsOptional()
  fechaActual?: Date;

  @AutoMap()
  @IsString()
  @IsOptional()
  canal?: string;

  @AutoMap()
  @IsNumber()
  @IsOptional()
  cpt?: number;

  @AutoMap()
  @IsDateString()
  @IsOptional()
  fechaVigencia?: Date;

  @AutoMap()
  @IsDateString()
  @IsOptional()
  fechaValidez?: Date;

  @AutoMap()
  @IsDateString()
  @IsOptional()
  inicioVigencia?: Date;

  @AutoMap()
  @IsString()
  @IsOptional()
  tipoServicio?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  cptPdf?: string;

}
