import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { TramiteDto } from './tramite.dto';
import { Type } from 'class-transformer';

export class ProvidenciaDto {
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
    providenciaPdf: string;

    @AutoMap()
    @IsString()
    flujo: string;

    @AutoMap(() => [TramiteDto])
    @Type(() => TramiteDto)
    @IsOptional()
    tramite?: TramiteDto[];

}

export class ProvidenciaCreacionDto {
 
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
    providenciaPdf: string;

    @AutoMap()
    @IsString()
    flujo: string;

}

export class ProvidenciaModificacionDto {

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
    providenciaPdf?: string;

    @AutoMap()
    @IsString()
    @IsOptional()
    flujo?: string;

}
