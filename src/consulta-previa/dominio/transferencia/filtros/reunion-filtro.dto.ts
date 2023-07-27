import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';

export class ReunionFiltroDto extends FiltroBaseDto {
  @AutoMap()
  @IsNumber()
  @IsOptional()
  id?: number;

  @AutoMap()
  @IsNumber()
  @IsOptional()
  fk_idNotificacion?: number;

  @AutoMap()
  @IsString()
  @IsOptional()
  nroReunion?: string;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  conAcuerdo?: boolean;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  sinAcuerdo?: boolean;

  @AutoMap()
  @IsString()
  @IsOptional()
  motivo?: string;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  reunionRealizada?: boolean;

  @AutoMap()
  @IsString()
  @IsOptional()
  actaReunionPdf?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  estado?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  flujo?: string;
}
