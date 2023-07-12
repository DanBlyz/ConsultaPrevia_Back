import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class ActoAdministrativoDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  fk_idTramite: number;

  @AutoMap()
  @IsBoolean()
  viajeRealizado: boolean;

  @AutoMap()
  @IsString()
  flujo: string;

  @AutoMap()
  @IsString()
  encargado: string;

  @AutoMap()
  @IsBoolean()
  pagoRealizado: boolean;
  
}

export class ActoAdministrativoCreacionDto {
 
    @AutoMap()
    @IsNumber()
    @IsPositive()
    fk_idTramite: number;
  
    @AutoMap()
    @IsBoolean()
    viajeRealizado: boolean;
  
    @AutoMap()
    @IsString()
    flujo: string;
  
    @AutoMap()
    @IsString()
    encargado: string;
}

export class ActoAdministrativoModificacionDto {
    @AutoMap()
    @IsNumber()
    @IsPositive()
    @IsOptional()
    fk_idTramite?: number;
  
    @AutoMap()
    @IsBoolean()
    @IsOptional()
    viajeRealizado?: boolean;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    flujo?: string;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    encargado?: string;

    @AutoMap()
    @IsBoolean()
    @IsOptional()
    pagoRealizado?: boolean;
}
