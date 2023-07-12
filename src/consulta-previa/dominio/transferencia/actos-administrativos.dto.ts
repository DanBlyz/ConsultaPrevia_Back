import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { TramiteEntity } from 'src/consulta-previa/infraestructura/repositorio/persistencia/orm';
import { Type } from 'class-transformer';
import { TramiteDto } from './tramite.dto';
import { Tramite } from '../entidades';

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

  /*@AutoMap()
  @Type(() => Tramite)
  @IsOptional()
  tramite?: Tramite;*/

  @AutoMap(() => [TramiteDto])
  @Type(() => TramiteDto)
  @IsOptional()
  tramite?: TramiteDto[];

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
