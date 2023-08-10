import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsNumber } from 'class-validator';

import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
import { Type } from 'class-transformer';
import { TramiteFiltroDto } from './tramite-filtro.dto';

export class ProvidenciaFiltroDto extends FiltroBaseDto {
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
  providenciaPdf?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  flujo?: string;

  @AutoMap(() => [TramiteFiltroDto])
  @Type(() => TramiteFiltroDto)
  @IsOptional()
  tramite?: TramiteFiltroDto[];
}
