import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  isString,
} from 'class-validator';

export class SujetoIdentificadoDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsNumber()
  fk_idInforme: number;

  @AutoMap()
  @IsString()
  comunidad: string;

  @AutoMap()
  @IsNumber()
  representante: number;

}

export class SujetoIdentificadoCreacionDto {
   
    @AutoMap()
    @IsNumber()
    fk_idInforme: number;

    @AutoMap()
    @IsString()
    comunidad: string;
  
    @AutoMap()
    @IsString()
    representante: string;
  
}

export class SujetoIdentificadoModificacionDto {
    @AutoMap()
    @IsString()
    @IsOptional()
    comunidad?: string;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    representante?: string;

}
