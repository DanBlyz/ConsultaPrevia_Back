import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsArray
} from 'class-validator';
import { ReunionDto } from './reunion.dto';
import { Type } from 'class-transformer';
import { TramiteDto } from './tramite.dto';

export class NotificacionDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  fk_idTramite: number;

  @AutoMap()
  @IsString()
  notificado: string;

  @AutoMap()
  @IsString()
  direccionDpto: string;

  @AutoMap()
  @IsString()
  notificacionPdf: string

  @AutoMap()
  @IsString()
  flujo: string

  @AutoMap()
  @IsBoolean()
  representanteMinero: boolean;

  @AutoMap()
  @IsBoolean()
  representanteComunidad: boolean;

  @AutoMap()
  @IsBoolean()
  sifde: boolean;

  @AutoMap()
  @IsString()
  @IsOptional()
  comunidad?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  nroReunion?: string;

  @AutoMap(() => [ReunionDto])
  @Type(() => ReunionDto)
  @IsOptional()
  reunion?: ReunionDto[];

  @AutoMap(() => [TramiteDto])
  @Type(() => TramiteDto)
  @IsOptional()
  tramite?: TramiteDto[];

}

export class NotificacionCreacionDto {
 
  @AutoMap()
  @IsNumber()
  @IsPositive()
  fk_idTramite: number;

  @AutoMap()
  @IsString()
  notificado: string;

  @AutoMap()
  @IsString()
  direccionDpto: string;

  @AutoMap()
  @IsString()
  notificacionPdf: string;

  @AutoMap()
  @IsString()
  flujo: string;

  @AutoMap()
  @IsBoolean()
  representanteMinero: boolean;

  @AutoMap()
  @IsBoolean()
  representanteComunidad: boolean;

  @AutoMap()
  @IsBoolean()
  sifde: boolean;

  @AutoMap()
  @IsString()
  @IsOptional()
  comunidad?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  nroReunion?: string;
}

export class NotificacionModificacionDto {
    
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
    representanteMinero?:boolean;

    @AutoMap()
    @IsBoolean()
    @IsOptional()
    representanteComunidad?:boolean;

    @AutoMap()
    @IsBoolean()
    @IsOptional()
    sifde?:boolean;

    @AutoMap()
    @IsString()
    @IsOptional()
    comunidad?: string;

    @AutoMap()
    @IsString()
    @IsOptional()
    nroReunion?: string;

    
}
