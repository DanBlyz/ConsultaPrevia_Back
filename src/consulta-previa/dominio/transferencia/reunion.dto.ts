import { AutoMap } from '@automapper/classes';
import { BlobOptions } from 'buffer';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { NotificacionDto } from './notificacion.dto';
export class ReunionDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  fk_idNotificacion: number;

  @AutoMap()
  @IsString()
  nroReunion: string;

  @AutoMap()
  @IsBoolean()
  acuerdo: boolean;

  @AutoMap()
  @IsString()
  motivo: string;

  @AutoMap()
  @IsBoolean()
  reunionRealizada: boolean;

  @AutoMap()
  @IsString()
  actaReunionPdf: string;

  @AutoMap()
  @IsString()
  encargado: string;

  @AutoMap(() => [NotificacionDto])
  @Type(() => NotificacionDto)
  @IsOptional()
  notificacion?: NotificacionDto[];

}

export class ReunionCreacionDto {
 
    @AutoMap()
    @IsNumber()
    @IsPositive()
    fk_idNotificacion: number;
  
    @AutoMap()
    @IsString()
    nroReunion: string;
  
    @AutoMap()
    @IsBoolean()
    acuerdo: boolean;
  
    @AutoMap()
    @IsString()
    motivo: string;
  
    @AutoMap()
    @IsBoolean()
    reunionRealizada: boolean;
  
    @AutoMap()
    @IsString()
    actaReunionPdf: string;
  
    @AutoMap()
    @IsString()
    encargado: string;
}

export class ReunionModificacionDto {

    @AutoMap()
    @IsString()
    @IsOptional()
    nroReunion?: string;

    @AutoMap()
    @IsBoolean()
    @IsOptional()
    acuerdo?: boolean;

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
    encargado?: string;
}
