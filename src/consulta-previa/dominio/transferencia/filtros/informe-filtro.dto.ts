import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsNumber } from 'class-validator';

import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';

export class InformeFiltroDto extends FiltroBaseDto {
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
  correlativo?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  referencia?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  informePdf?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  tipoDocumento?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  flujo?: string;
}
