import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional } from 'class-validator';

import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';

export class UsuarioFiltroDto extends FiltroBaseDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  nombre?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  apellido?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  nomPublico?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  correoElectronico?: string;
}
