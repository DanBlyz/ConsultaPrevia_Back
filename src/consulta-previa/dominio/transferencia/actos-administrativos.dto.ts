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
import { PagoCptDto } from './pago-cpt.dto';
import { ViajeDto } from './viaje.dto';
import { ResolucionDto } from './resolucion.dto';

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
  @IsNumber()
  @IsPositive()
  fk_idResolucion: number;

  @AutoMap()
  @IsBoolean()
  viajeRealizado: boolean;

  @AutoMap()
  @IsString()
  flujo: string;

  @AutoMap()
  @IsString()
  estado: string;

  @AutoMap(() => [TramiteDto])
  @Type(() => TramiteDto)
  @IsOptional()
  tramite?: TramiteDto[];

  @AutoMap(() => [ResolucionDto])
  @Type(() => ResolucionDto)
  @IsOptional()
  resolucion?: ResolucionDto[];

  @AutoMap(() => [PagoCptDto])
  @Type(() => PagoCptDto)
  @IsOptional()
  pagoCpt?: PagoCptDto[];

  @AutoMap(() => [ViajeDto])
  @Type(() => ViajeDto)
  @IsOptional()
  viaje?: ViajeDto[];
}

export class ActoAdministrativoCreacionDto {
 
    @AutoMap()
    @IsNumber()
    @IsPositive()
    @IsOptional()
    fk_idTramite?: number;

    @AutoMap()
    @IsNumber()
    @IsPositive()
    @IsOptional()
    fk_idResolucion?: number;
  
    @AutoMap()
    @IsBoolean()
    viajeRealizado: boolean;
  
    @AutoMap()
    @IsString()
    flujo: string;

}

export class ActoAdministrativoModificacionDto {
    @AutoMap()
    @IsNumber()
    @IsPositive()
    @IsOptional()
    fk_idTramite?: number;
  
    @AutoMap()
    @IsNumber()
    @IsPositive()
    @IsOptional()
    fk_idResolucion?: number;

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
    @IsString()
    @IsOptional()
    estado?: string;
}
