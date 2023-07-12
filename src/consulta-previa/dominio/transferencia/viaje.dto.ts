import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class ViajeDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  fk_idActos: number;

  @AutoMap()
  @IsDateString()
  fechaInicio: Date;

  @AutoMap()
  @IsDateString()
  fechaFin: Date;

  @AutoMap()
  @IsString()
  descripcion: string;

  @AutoMap()
  @IsString()
  nroFormulario: string;

  @AutoMap()
  @IsString()
  formularioPdf: string;

}

export class ViajeCreacionDto {
 
    @AutoMap()
    @IsNumber()
    @IsPositive()
    fk_idActos: number;
  
    @AutoMap()
    @IsDateString()
    fechaInicio: Date;
  
    @AutoMap()
    @IsDateString()
    fechaFin: Date;
  
    @AutoMap()
    @IsString()
    descripcion: string;
  
    @AutoMap()
    @IsString()
    nroFormulario: string;
  
    @AutoMap()
    @IsString()
    formularioPdf: string;
}

export class ViajeModificacionDto {

    @AutoMap()
    @IsDateString()
    @IsOptional()
    fechaInicio?: Date;

    @AutoMap()
    @IsDateString()
    @IsOptional()
    fechaFin?: Date;

    @AutoMap()
    @IsString()
    @IsOptional()
    descripcion?: string;

    @AutoMap()
    @IsString()
    @IsOptional()
    nroFormulario?: string;

    @AutoMap()
    @IsString()
    @IsOptional()
    formularioPdf?: string;
}
