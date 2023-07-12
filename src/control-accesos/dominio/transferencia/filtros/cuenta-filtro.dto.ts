import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsBoolean } from 'class-validator';

import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';

export class CuentaFiltroDto extends FiltroBaseDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  codigo?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  modoAutenticacion?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  nombre?: string;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  estaAutorizada?: boolean;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  estaBloqueada?: boolean;
}
