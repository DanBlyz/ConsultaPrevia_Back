import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';

export class NotificacionFiltroDto extends FiltroBaseDto {
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
  notificado?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  direccionDpto?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  notificacionPdf?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  flujo?: string;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  representanteMinero?: boolean;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  representanteComunidad?: boolean;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  sifde?: boolean;

  @AutoMap()
  @IsString()
  @IsOptional()
  comunidad?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  nroReunion?: string;
}
