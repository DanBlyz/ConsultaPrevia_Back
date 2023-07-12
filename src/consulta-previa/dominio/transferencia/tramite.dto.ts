import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsArray
} from 'class-validator';
import { ResolucionDto } from './resolucion.dto';
import { Type } from 'class-transformer';
import { ProvidenciaDto } from './providencia.dto';
import { InformeDto } from './informe.dto';
import { NotificacionDto } from './notificacion.dto';
import { ActoAdministrativoDto } from './actos-administrativos.dto';

export class TramiteDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsString()
  correlativo: string;

  @AutoMap()
  @IsNumber()
  codigoUnico: number;

  @AutoMap()
  @IsString()
  areaMinera: string;

  @AutoMap()
  @IsString()
  clasificacion: string;

  @AutoMap()
  @IsString()
  departamento: string;

  @AutoMap()
  @IsString()
  provincia: string;

  @AutoMap()
  @IsString()
  municipio: string;

  @AutoMap(() => [ResolucionDto])
  @IsArray({ each: true })
  @Type(() => ResolucionDto)
  @IsOptional()
  listaResolucion?: ResolucionDto[];

  @AutoMap(() => [ProvidenciaDto])
  @IsArray({ each: true })
  @Type(() => ProvidenciaDto)
  @IsOptional()
  listaProvidencia?: ProvidenciaDto[];

  @AutoMap(() => [InformeDto])
  @IsArray({ each: true })
  @Type(() => InformeDto)
  @IsOptional()
  listaInforme?: InformeDto[];

  @AutoMap(() => [NotificacionDto])
  @IsArray({ each: true })
  @Type(() => NotificacionDto)
  @IsOptional()
  listaNotificacion?: NotificacionDto[];

  @AutoMap(() => [ActoAdministrativoDto])
  @IsArray({ each: true })
  @Type(() => ActoAdministrativoDto)
  @IsOptional()
  listaActoAdministrativo?: ActoAdministrativoDto[];

}

export class TramiteCreacionDto {
    @AutoMap()
    @IsString()
    correlativo: string;
  
    @AutoMap()
    @IsNumber()
    codigoUnico: number;
  
    @AutoMap()
    @IsString()
    areaMinera: string;
  
    @AutoMap()
    @IsString()
    clasificacion: string;
  
    @AutoMap()
    @IsString()
    departamento: string;
  
    @AutoMap()
    @IsString()
    provincia: string;
  
    @AutoMap()
    @IsString()
    municipio: string;
}

export class TramiteModificacionDto {
    @AutoMap()
    @IsString()
    @IsOptional()
    correlativo?: string;
  
    @AutoMap()
    @IsNumber()
    @IsOptional()
    codigoUnico?: number;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    areaMinera?: string;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    clasificacion?: string;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    departamento?: string;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    provincia?: string;
  
    @AutoMap()
    @IsString()
    @IsOptional()
    municipio?: string;
}
