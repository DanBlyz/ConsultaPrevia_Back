import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
import { TramiteFiltroDto } from './tramite-filtro.dto';
import { Type } from 'class-transformer';

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

  @AutoMap(() => [TramiteFiltroDto])
  @Type(() => TramiteFiltroDto)
  @IsOptional()
  tramite?: TramiteFiltroDto[];
}
