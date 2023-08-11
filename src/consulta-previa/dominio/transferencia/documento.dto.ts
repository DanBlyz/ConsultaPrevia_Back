import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsArray
} from 'class-validator';
import { TramiteDto } from './tramite.dto';
import { Type } from 'class-transformer';
import { SujetoIdentificadoCreacionDto, SujetoIdentificadoDto } from './sujeto-identificado.dto';

export class DocumentoDto {
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
    documentoPdf: string;

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

    @AutoMap(() => [SujetoIdentificadoDto])
    @IsArray({ each: true })
    @Type(() => SujetoIdentificadoDto)
    @IsOptional()
    listaSujetoIdentificado?: SujetoIdentificadoDto[];

}

export class DocumentoCreacionDto {
 
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
    documentoPdf: string;

    @AutoMap()
    @IsString()
    tipoDocumento: string;

    @AutoMap()
    @IsString()
    flujo: string;

    @AutoMap()
    @IsArray({ each: true })
    @Type(() => SujetoIdentificadoDto)
    @IsOptional()
    listaSujetoIdentificado?: SujetoIdentificadoCreacionDto[];

}

export class DocumentoModificacionDto {

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
    documentoPdf?: string;

    @AutoMap()
    @IsString()
    @IsOptional()
    tipoDocumento?: string;

    @AutoMap()
    @IsString()
    @IsOptional()
    flujo?: string;

}
