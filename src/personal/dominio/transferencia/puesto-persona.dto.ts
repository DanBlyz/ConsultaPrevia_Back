import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class PuestoPersonaDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsString()
  tipoMovilidad: string;

  @AutoMap()
  @IsString()
  tipoLaboral: string;

  @AutoMap()
  @IsDate()
  fecInicio: Date;

  @AutoMap()
  @IsDate()
  @IsOptional()
  fecConclusion?: Date;

  @AutoMap()
  @IsBoolean()
  esInterinato: boolean;

  @AutoMap()
  @IsBoolean()
  tieneDesvinculacion: boolean;

  @AutoMap()
  @IsString()
  estado: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  puestoId?: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  personaId: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  uniOrganizacionalId: number;

  @AutoMap()
  @IsString()
  @IsOptional()
  puestoNombre?: string;

  @AutoMap()
  @IsString()
  uniOrganizacionalNombre: string;

  @AutoMap()
  @IsBoolean()
  sePuedeModificar: boolean;

  @AutoMap()
  @IsBoolean()
  sePuedeEliminar: boolean;
}

export class PuestoPersonaCreacionDto {
  @AutoMap()
  @IsString()
  tipoMovilidad: string;

  @AutoMap()
  @IsString()
  tipoLaboral: string;

  @AutoMap()
  @IsDate()
  fecInicio: Date;

  @AutoMap()
  @IsDate()
  @IsOptional()
  fecConclusion?: Date;

  @AutoMap()
  @IsBoolean()
  esInterinato: boolean;

  @AutoMap()
  @IsString()
  estado: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  puestoId?: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  personaId: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  uniOrganizacionalId: number;
}

export class PuestoPersonaModificacionDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  tipoMovilidad?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  tipoLaboral?: string;

  @AutoMap()
  @IsDate()
  @IsOptional()
  fecInicio?: Date;

  @AutoMap()
  @IsDate()
  @IsOptional()
  @IsOptional()
  fecConclusion?: Date;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  esInterinato?: boolean;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  tieneDesvinculacion?: boolean;

  @AutoMap()
  @IsString()
  @IsOptional()
  estado?: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsOptional()
  puestoId?: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  personaId?: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  uniOrganizacionalId?: number;
}
