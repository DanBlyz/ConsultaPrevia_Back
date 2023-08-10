import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';

export class ResolucionFiltroDto extends FiltroBaseDto {
  @AutoMap()
  @IsNumber()
  @IsOptional()
  id?: number;

  @AutoMap()
  @IsNumber()
  @IsOptional()
  fk_idTramite?: number;

  @AutoMap()
  @IsString()
  @IsOptional()
  informe?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  correlativo?: string;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  informeAprobado?: boolean;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  actoAdministrativo?: boolean;

  @AutoMap()
  @IsString()
  @IsOptional()
  resolucionPdf?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  flujo?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  referencia?: string;
}
