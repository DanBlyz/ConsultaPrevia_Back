import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
import { TramiteFiltroDto } from './tramite-filtro.dto';
import { Type } from 'class-transformer';
export class ActoAdministrativoFiltroDto extends FiltroBaseDto {
  @AutoMap()
  @IsNumber()
  @IsOptional()
  id?: number;

  @AutoMap()
  @IsNumber()
  @IsOptional()
  fk_idTramite?: number;

  @AutoMap()
  @IsNumber()
  @IsOptional()
  fk_idResolucion?: number;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  viajeRealizado?: boolean;

  @AutoMap()
  @IsString()
  @IsOptional()
  flujo?: string;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  estado?: string;

  @AutoMap(() => [TramiteFiltroDto])
  @Type(() => TramiteFiltroDto)
  @IsOptional()
  tramite?: TramiteFiltroDto[];

}
