import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  isBoolean,
} from 'class-validator';

export class ResolucionDto {
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
  informe: string;

  @AutoMap()
  @IsString()
  correlativo: string;

  @AutoMap()
  @IsBoolean()
  informeAprobado: boolean;

  @AutoMap()
  @IsBoolean()
  actoAdministrativo: boolean;

  @AutoMap()
  @IsString()
  resolucionPdf: string;

  @AutoMap()
  @IsString()
  flujo: string;

  @AutoMap()
  @IsString()
  referencia: string;

}

export class ResolucionCreacionDto {
 
    @AutoMap()
    @IsNumber()
    @IsPositive()
    fk_idTramite: number;
  
    @AutoMap()
    @IsString()
    informe: string;
  
    @AutoMap()
    @IsString()
    correlativo: string;
  
    @AutoMap()
    @IsBoolean()
    informeAprobado: boolean;
  
    @AutoMap()
    @IsBoolean()
    actoAdministrativo: boolean;
  
    @AutoMap()
    @IsString()
    resolucionPdf: string;
    
    @AutoMap()
    @IsString()
    flujo: string;

    @AutoMap()
    @IsString()
    referencia: string;
}

export class ResolucionModificacionDto {

  @AutoMap()
  @IsNumber()
  @IsPositive()
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
}
