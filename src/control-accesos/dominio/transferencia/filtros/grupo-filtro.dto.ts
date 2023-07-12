import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional } from 'class-validator';

import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';

export class GrupoFiltroDto extends FiltroBaseDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  codigo?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  nombre?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  descripcion?: string;
}
