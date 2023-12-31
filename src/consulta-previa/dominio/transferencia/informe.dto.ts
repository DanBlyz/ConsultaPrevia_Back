import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsArray
} from 'class-validator';
import { Type } from 'class-transformer';
import { SujetoIdentificadoCreacionDto, SujetoIdentificadoDto, SujetoIdentificadoModificacionDto } from './sujeto-identificado.dto';
import { TramiteDto } from './tramite.dto';

export class InformeDto {
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
  correlativo: string;

  @AutoMap()
  @IsString()
  referencia: string;

  @AutoMap()
  @IsString()
  informePdf: string;

  @AutoMap()
  @IsString()
  tipoDocumento: string;

  @AutoMap()
  @IsString()
  flujo: string;

  @AutoMap(() => [TramiteDto])
  @Type(() => TramiteDto)
  @IsOptional()
  tramite?: TramiteDto[];

 /* @AutoMap(() => [SujetoIdentificadoDto])
  @IsArray({ each: true })
  @Type(() => SujetoIdentificadoDto)
  @IsOptional()
  listaSujetoIdentificado?: SujetoIdentificadoDto[];*/

}

export class InformeCreacionDto {
 
  @AutoMap()
  @IsNumber()
  @IsPositive()
  fk_idTramite: number;

  @AutoMap()
  @IsString()
  correlativo: string;

  @AutoMap()
  @IsString()
  referencia: string;

  @AutoMap()
  @IsString()
  informePdf: string;

  @AutoMap()
  @IsString()
  tipoDocumento: string;

  @AutoMap()
  @IsString()
  flujo: string;

  /*@AutoMap()
  @IsArray({ each: true })
  @Type(() => SujetoIdentificadoDto)
  @IsOptional()
  listaSujetoIdentificado?: SujetoIdentificadoCreacionDto[];*/
}

export class InformeModificacionDto {
    @AutoMap()
    @IsNumber()
    @IsPositive()
    @IsOptional()
    fk_idTramite?: number;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    correlativo?: string;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    referencia?: string;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    informePdf?: string;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    tipoDocumento?: string;

    @AutoMap()
    @IsString()
    @IsOptional()
    flujo?: string;

    /*@AutoMap()
    @IsArray({ each: true })
    @Type(() => SujetoIdentificadoDto)
    @IsOptional()
    listaSujetoIdentificado?: SujetoIdentificadoModificacionDto[];*/
}
