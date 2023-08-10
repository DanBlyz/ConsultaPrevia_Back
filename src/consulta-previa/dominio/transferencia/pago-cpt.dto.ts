import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsDateString,
  IsDecimal,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsIn
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

  @AutoMap()
  @IsString()
  descripcion: string;

  @AutoMap()
  @IsString()
  estado: string;

  @AutoMap()
  @IsNumber()
  transaccion: number;

  @AutoMap()
  @IsDateString()
  fechaActual: Date;

  @AutoMap()
  @IsString()
  canal: string;

  @AutoMap()
  @IsNumber()
  cpt: number;

  @AutoMap()
  @IsDateString()
  fechaVigencia: Date;

  @AutoMap()
  @IsDateString()
  fechaValidez: Date;

  @AutoMap()
  @IsDateString()
  inicioVigencia: Date;

  @AutoMap()
  @IsString()
  tipoServicio: string;

  @AutoMap()
  @IsString()
  cptPdf: string;
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

    @AutoMap()
    @IsString()
    descripcion: string;

    @AutoMap()
    @IsString()
    @IsIn(['EN PROCESO', 'PAGADO'])
    estado: string;
  
    @AutoMap()
    @IsNumber()
    @IsOptional()
    transaccion?: number;
  
    @AutoMap()
    @IsDateString()
    @IsOptional()
    fechaActual?: Date;
  
    @AutoMap()
    @IsString()
    @IsIn(['UNINET', 'BANCO'])
    @IsOptional()
    canal?: string;
  
    @AutoMap()
    @IsNumber()
    @IsOptional()
    cpt?: number;
  
    @AutoMap()
    @IsDateString()
    @IsOptional()
    fechaVigencia?: Date;
  
    @AutoMap()
    @IsDateString()
    @IsOptional()
    fechaValidez?: Date;
  
    @AutoMap()
    @IsDateString()
    @IsOptional()
    inicioVigencia?: Date;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    tipoServicio?: string;

    @AutoMap()
    @IsString()
    @IsOptional()
    cptPdf?: string;
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

    @AutoMap()
    @IsString()
    @IsOptional()
    descripcion?: string;

    @AutoMap()
    @IsString()
    @IsOptional()
    estado?: string;
  
    @AutoMap()
    @IsNumber()
    @IsOptional()
    transaccion?: number;
  
    @AutoMap()
    @IsDateString()
    @IsOptional()
    fechaActual?: Date;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    canal?: string;
  
    @AutoMap()
    @IsNumber()
    @IsOptional()
    cpt?: number;
  
    @AutoMap()
    @IsDateString()
    @IsOptional()
    fechaVigencia?: Date;
  
    @AutoMap()
    @IsDateString()
    @IsOptional()
    fechaValidez?: Date;
  
    @AutoMap()
    @IsDateString()
    @IsOptional()
    inicioVigencia?: Date;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    tipoServicio?: string;

    @AutoMap()
    @IsString()
    @IsOptional()
    cptPdf?: string;
}
