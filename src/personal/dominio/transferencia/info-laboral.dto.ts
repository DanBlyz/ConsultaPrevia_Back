import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class InfoLaboralDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsString()
  tipoLaboral: string;

  @AutoMap()
  @IsString()
  correoInstitucional?: string;

  @AutoMap()
  @IsString()
  numInterno?: string;

  @AutoMap()
  @IsString()
  estado: string;

  @AutoMap()
  @IsString()
  cuenta?: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  uniOrganizacionalId: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  puestoId: number;

  @AutoMap()
  @IsString()
  uniOrganizacionalNombre?: string;

  @AutoMap()
  @IsString()
  puestoNombre?: string;

  @AutoMap()
  @IsBoolean()
  sePuedeModificar: boolean;

  @AutoMap()
  @IsBoolean()
  sePuedeEliminar: boolean;
}

export class InfoLaboralCreacionDto {
  @AutoMap()
  @IsString()
  tipoLaboral: string;

  @AutoMap()
  @IsString()
  correoInstitucional?: string;

  @AutoMap()
  @IsString()
  numInterno?: string;

  @AutoMap()
  @IsString()
  estado: string;

  @AutoMap()
  @IsString()
  cuenta?: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  uniOrganizacionalId: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  puestoId: number;
}

export class InfoLaboralModificacionDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  tipoLaboral?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  correoInstitucional?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  numInterno?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  estado?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  cuenta?: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  uniOrganizacionalId?: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  puestoId?: number;
}
