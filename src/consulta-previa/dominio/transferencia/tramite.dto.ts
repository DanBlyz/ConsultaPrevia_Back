import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsArray
} from 'class-validator';
import { ResolucionDto, ResolucionModificacionDto } from './resolucion.dto';
import { Type } from 'class-transformer';
import { ProvidenciaDto, ProvidenciaModificacionDto } from './providencia.dto';
import { InformeDto } from './informe.dto';
import { NotificacionDto, NotificacionModificacionDto } from './notificacion.dto';
import { ActoAdministrativoDto, ActoAdministrativoModificacionDto } from './actos-administrativos.dto';
import { DocumentoDto } from './documento.dto';

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
  @IsNumber()
  nroCuadricula: number;

  @AutoMap()
  @IsString()
  departamento: string;

  @AutoMap()
  @IsString()
  provincia: string;

  @AutoMap()
  @IsString()
  municipio: string;

  @AutoMap()
  @IsString()
  estado: string;

  @AutoMap()
  @IsString()
  estadoAccion: string;

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

  @AutoMap(() => [DocumentoDto])
  @IsArray({ each: true })
  @Type(() => DocumentoDto)
  @IsOptional()
  listaDocumento?: DocumentoDto[];

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
    @IsNumber()
    nroCuadricula: number;
  
    @AutoMap()
    @IsString()
    departamento: string;
  
    @AutoMap()
    @IsString()
    provincia: string;
  
    @AutoMap()
    @IsString()
    municipio: string;

    @AutoMap()
    @IsString()
    estado: string;

    @AutoMap()
    @IsString()
    estadoAccion: string;
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
    @IsNumber()
    @IsOptional()
    nroCuadricula?: number;
  
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

    @AutoMap()
    @IsString()
    @IsOptional()
    estado?: string;

    @AutoMap()
    @IsString()
    @IsOptional()
    estadoAccion?: string;

    @AutoMap()
    @IsArray({ each: true })
    @Type(() => ResolucionDto)
    @IsOptional()
    listaResolucion?: ResolucionModificacionDto[];

    @AutoMap()
    @IsArray({ each: true })
    @Type(() => ProvidenciaDto)
    @IsOptional()
    listaProvidencia?: ProvidenciaModificacionDto[];

    @AutoMap()
    @IsArray({ each: true })
    @Type(() => NotificacionDto)
    @IsOptional()
    listaNotificacion?: NotificacionModificacionDto[];

    @AutoMap()
    @IsArray({ each: true })
    @Type(() => ActoAdministrativoDto)
    @IsOptional()
    listaActoAdministrativo?: ActoAdministrativoModificacionDto[];
}
