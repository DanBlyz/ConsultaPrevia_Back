import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsDecimal,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class PagoCptDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  fk_idActos: number;

  @AutoMap()
  @IsBoolean()
  pagoRealizado: boolean;

  @AutoMap()
  @IsString()
  flujo: string;

  @AutoMap()
  @IsString()
  encargado: string;

  @AutoMap()
  @IsNumber()
  diasViaje: number;

  @AutoMap()
  @IsString()
  tipoViaje: string;

  @AutoMap()
  @IsNumber()
  montoTotal: number;

  @AutoMap()
  @IsString()
  apm: string;

}

export class PagoCptCreacionDto {
 
    @AutoMap()
    @IsNumber()
    @IsPositive()
    fk_idActos: number;
  
    @AutoMap()
    @IsBoolean()
    pagoRealizado: boolean;
  
    @AutoMap()
    @IsString()
    flujo: string;
  
    @AutoMap()
    @IsString()
    encargado: string;
  
    @AutoMap()
    @IsNumber()
    diasViaje: number;
  
    @AutoMap()
    @IsString()
    tipoViaje: string;
  
    @AutoMap()
    @IsNumber()
    montoTotal: number;
  
    @AutoMap()
    @IsString()
    apm: string;
}

export class PagoCptModificacionDto {

    @AutoMap()
    @IsBoolean()
    @IsOptional()
    pagoRealizado?: boolean;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    flujo?: string;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    encargado?: string;
  
    @AutoMap()
    @IsNumber()
    @IsOptional()
    diasViaje?: number;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    tipoViaje?: string;
  
    @AutoMap()
    @IsNumber()
    @IsOptional()
    montoTotal?: number;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    apm?: string;
}
