import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  isString,
} from 'class-validator';
import { InformeDto } from './informe.dto';
import { Type } from 'class-transformer';

export class SujetoIdentificadoDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsNumber()
  fk_idDocumento: number;

  @AutoMap()
  @IsString()
  comunidad: string;

  @AutoMap()
  @IsString()
  autoridad: string;

  @AutoMap()
  @IsNumber()
  telefono: number;

  @AutoMap(() => [InformeDto])
  @Type(() => InformeDto)
  @IsOptional()
  informe?: InformeDto[];

}

export class SujetoIdentificadoCreacionDto {
   
    @AutoMap()
    @IsNumber()
    fk_idDocumento: number;

    @AutoMap()
    @IsString()
    comunidad: string;
  
    @AutoMap()
    @IsString()
    autoridad: string;

    @AutoMap()
    @IsNumber()
    telefono: number
  
}

export class SujetoIdentificadoModificacionDto {
    @AutoMap()
    @IsString()
    @IsOptional()
    comunidad?: string;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    autoridad?: string;

    @AutoMap()
    @IsNumber()
    telefono?: number

}
