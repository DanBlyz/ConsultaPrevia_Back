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
  resolucion: string;

  @AutoMap()
  @IsBoolean()
  informeAprobado: boolean;

  @AutoMap()
  @IsBoolean()
  ActoAdministrativo: boolean;

  @AutoMap()
  @IsString()
  resolucionPdf: string;

  @AutoMap()
  @IsString()
  flujo: string;

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
    resolucion: string;
  
    @AutoMap()
    @IsBoolean()
    informeAprobado: boolean;
  
    @AutoMap()
    @IsBoolean()
    ActoAdministrativo: boolean;
  
    @AutoMap()
    @IsString()
    resolucionPdf: string;
    
    @AutoMap()
    @IsString()
    flujo: string;
}

export class ResolucionModificacionDto {

  @AutoMap()
  @IsString()
  @IsOptional()
  informe?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  resolucion?: string;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  informeAprobado?: boolean;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  ActoAdministrativo?: boolean;

  @AutoMap()
  @IsString()
  @IsOptional()
  resolucionPdf?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  flujo?: string;
}